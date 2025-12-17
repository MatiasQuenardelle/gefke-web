#!/bin/bash

# SEO Implementation Quick Test Script
# Run this after starting your dev server: npm run dev

echo "🔍 SEO Implementation Test Script"
echo "=================================="
echo ""

BASE_URL="http://localhost:3000"
CURL_TIMEOUT=5  # Timeout in seconds

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Test counter
PASSED=0
FAILED=0

# Check if server is running
check_server() {
    echo -n "Checking if dev server is running... "
    if curl -s --max-time 2 "$BASE_URL" > /dev/null 2>&1; then
        echo -e "${GREEN}✓ Server is running${NC}"
        echo ""
        return 0
    else
        echo -e "${RED}✗ Server is not running${NC}"
        echo ""
        echo -e "${YELLOW}Please start the dev server first:${NC}"
        echo "  npm run dev"
        echo ""
        exit 1
    fi
}

# Function to test endpoint
test_endpoint() {
    local name=$1
    local url=$2
    local expected=$3
    
    echo -n "Testing $name... "
    response=$(curl -s --max-time $CURL_TIMEOUT --connect-timeout 2 -o /dev/null -w "%{http_code}" "$url" 2>/dev/null)
    
    if [ -z "$response" ] || [ "$response" = "000" ]; then
        echo -e "${RED}✗ FAIL${NC} (Connection timeout or refused)"
        ((FAILED++))
        return 1
    elif [ "$response" = "$expected" ]; then
        echo -e "${GREEN}✓ PASS${NC} (HTTP $response)"
        ((PASSED++))
        return 0
    else
        echo -e "${RED}✗ FAIL${NC} (HTTP $response, expected $expected)"
        ((FAILED++))
        return 1
    fi
}

# Function to check content exists
check_content() {
    local name=$1
    local url=$2
    local search_term=$3
    
    echo -n "Checking $name... "
    content=$(curl -s --max-time $CURL_TIMEOUT --connect-timeout 2 "$url" 2>/dev/null)
    
    if [ -z "$content" ]; then
        echo -e "${RED}✗ FAIL${NC} (Could not fetch content)"
        ((FAILED++))
        return 1
    elif echo "$content" | grep -q "$search_term"; then
        echo -e "${GREEN}✓ PASS${NC} (found: $search_term)"
        ((PASSED++))
        return 0
    else
        echo -e "${RED}✗ FAIL${NC} (not found: $search_term)"
        ((FAILED++))
        return 1
    fi
}

# Check server first
check_server

echo "Testing endpoints..."
echo ""

# Test 1: Sitemap
test_endpoint "Sitemap.xml" "$BASE_URL/sitemap.xml" "200"
if [ $? -eq 0 ]; then
    check_content "Sitemap content" "$BASE_URL/sitemap.xml" "christiangefke.com"
fi

# Test 2: Robots.txt
test_endpoint "Robots.txt" "$BASE_URL/robots.txt" "200"
if [ $? -eq 0 ]; then
    check_content "Robots.txt content" "$BASE_URL/robots.txt" "User-agent"
    check_content "Robots sitemap" "$BASE_URL/robots.txt" "sitemap.xml"
fi

# Test 3: Homepage metadata
test_endpoint "Homepage" "$BASE_URL" "200"
if [ $? -eq 0 ]; then
    check_content "Homepage title" "$BASE_URL" "<title>"
    check_content "Homepage meta description" "$BASE_URL" 'meta name="description"'
    check_content "Homepage OpenGraph" "$BASE_URL" 'property="og:title"'
    check_content "Homepage structured data" "$BASE_URL" "application/ld+json"
    check_content "Homepage hreflang" "$BASE_URL" "hreflang"
fi

# Test 4: Service page metadata
test_endpoint "Service page" "$BASE_URL/real-estate-buy-sell-spain" "200"
if [ $? -eq 0 ]; then
    check_content "Service page title" "$BASE_URL/real-estate-buy-sell-spain" "<title>"
    check_content "Service page structured data" "$BASE_URL/real-estate-buy-sell-spain" "application/ld+json"
fi

# Test 5: About page
test_endpoint "About page" "$BASE_URL/about" "200"

echo ""
echo "=================================="
echo "Test Results:"
echo -e "${GREEN}Passed: $PASSED${NC}"
echo -e "${RED}Failed: $FAILED${NC}"
echo ""

if [ $FAILED -eq 0 ]; then
    echo -e "${GREEN}✅ All tests passed!${NC}"
    echo ""
    echo "Next steps:"
    echo "1. Open http://localhost:3000 in browser"
    echo "2. View page source and verify metadata"
    echo "3. Check browser console for errors"
    echo "4. Test with online validators (see SEO_TESTING_CHECKLIST.md)"
    exit 0
else
    echo -e "${YELLOW}⚠️  Some tests failed. Check the output above.${NC}"
    echo ""
    echo "Make sure:"
    echo "1. Dev server is running: npm run dev"
    echo "2. Server is accessible at http://localhost:3000"
    exit 1
fi

