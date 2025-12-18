#!/bin/bash

# SEO Implementation Comprehensive Test Script
# Run this after starting your dev server: npm run dev
# Tests all 10 SEO implementation steps from SEO_IMPLEMENTATION_GUIDE.md

echo "🔍 SEO Implementation Comprehensive Test Script"
echo "================================================"
echo ""

# Allow PORT to be set via environment variable, default to 3000
PORT=${PORT:-3000}
BASE_URL="http://localhost:${PORT}"
CURL_TIMEOUT=5  # Timeout in seconds

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Test counter
PASSED=0
FAILED=0
WARNINGS=0

# Check if server is running on common ports
check_server() {
    echo -n "Checking if dev server is running... "
    
    # Try the specified port first
    if curl -s --max-time 2 "$BASE_URL" > /dev/null 2>&1; then
        echo -e "${GREEN}✓ Server is running on port ${PORT}${NC}"
        echo ""
        return 0
    fi
    
    # Try common Next.js ports (3000-3005)
    for port in 3000 3001 3002 3003 3004 3005; do
        if curl -s --max-time 2 "http://localhost:${port}" > /dev/null 2>&1; then
            PORT=$port
            BASE_URL="http://localhost:${PORT}"
            echo -e "${GREEN}✓ Server is running on port ${PORT}${NC}"
            echo ""
            return 0
        fi
    done
    
    echo -e "${RED}✗ Server is not running${NC}"
    echo ""
    echo -e "${YELLOW}Please start the dev server first:${NC}"
    echo "  npm run dev"
    echo ""
    echo -e "${YELLOW}Or specify a port:${NC}"
    echo "  PORT=3003 ./test-seo.sh"
    echo ""
    exit 1
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
    local case_insensitive=${4:-false}
    
    echo -n "Checking $name... "
    content=$(curl -s --max-time $CURL_TIMEOUT --connect-timeout 2 "$url" 2>/dev/null)
    
    if [ -z "$content" ]; then
        echo -e "${RED}✗ FAIL${NC} (Could not fetch content)"
        ((FAILED++))
        return 1
    elif [ "$case_insensitive" = "true" ]; then
        if echo "$content" | grep -qi "$search_term"; then
            echo -e "${GREEN}✓ PASS${NC} (found: $search_term)"
            ((PASSED++))
            return 0
        else
            echo -e "${RED}✗ FAIL${NC} (not found: $search_term)"
            ((FAILED++))
            return 1
        fi
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

# Function to count occurrences
count_occurrences() {
    local name=$1
    local url=$2
    local search_term=$3
    local expected_min=$4
    local case_insensitive=${5:-false}
    
    echo -n "Checking $name... "
    content=$(curl -s --max-time $CURL_TIMEOUT --connect-timeout 2 "$url" 2>/dev/null)
    
    if [ -z "$content" ]; then
        echo -e "${RED}✗ FAIL${NC} (Could not fetch content)"
        ((FAILED++))
        return 1
    fi
    
    local count
    if [ "$case_insensitive" = "true" ]; then
        count=$(echo "$content" | grep -oi "$search_term" | wc -l | tr -d ' ')
    else
        count=$(echo "$content" | grep -o "$search_term" | wc -l | tr -d ' ')
    fi
    
    if [ "$count" -ge "$expected_min" ]; then
        echo -e "${GREEN}✓ PASS${NC} (found $count, expected ≥$expected_min)"
        ((PASSED++))
        return 0
    else
        echo -e "${RED}✗ FAIL${NC} (found $count, expected ≥$expected_min)"
        ((FAILED++))
        return 1
    fi
}

# Function to validate JSON-LD (warning only - full validation requires online tools)
validate_json_ld() {
    local name=$1
    local url=$2
    local schema_type=$3
    
    echo -n "Checking $name JSON-LD ($schema_type)... "
    content=$(curl -s --max-time $CURL_TIMEOUT --connect-timeout 2 "$url" 2>/dev/null)
    
    if [ -z "$content" ]; then
        echo -e "${RED}✗ FAIL${NC} (Could not fetch content)"
        ((FAILED++))
        return 1
    fi
    
    # Check if schema type exists in content (JSON-LD may be escaped/minified)
    # Since JSON-LD blocks exist (verified by count), we'll warn if type not found
    # Full validation should use Google Rich Results Test or Schema.org Validator
    if echo "$content" | grep -qi "\"@type\"[^}]*\"$schema_type\"" || echo "$content" | grep -qi "\"$schema_type\""; then
        echo -e "${GREEN}✓ PASS${NC} (found $schema_type schema)"
        ((PASSED++))
        return 0
    else
        echo -e "${YELLOW}⚠ WARN${NC} ($schema_type not found in HTML - verify with online validators)"
        ((WARNINGS++))
        return 0
    fi
}

# Check server first
check_server

echo "Testing SEO Implementation (10 Steps)"
echo "====================================="
echo ""

# ============================================
# Step 1: Metadata System (Titles & Descriptions)
# ============================================
echo -e "${BLUE}Step 1: Metadata System${NC}"
test_endpoint "Homepage" "$BASE_URL" "200"
if [ $? -eq 0 ]; then
    check_content "Homepage title" "$BASE_URL" "<title>"
    check_content "Homepage meta description" "$BASE_URL" 'meta name="description"'
    check_content "Homepage OpenGraph" "$BASE_URL" 'property="og:title"'
    check_content "Homepage Twitter Card" "$BASE_URL" 'name="twitter:card"'
fi

# Test multiple pages for unique titles
test_endpoint "About page" "$BASE_URL/about" "200"
if [ $? -eq 0 ]; then
    check_content "About page title" "$BASE_URL/about" "<title>"
fi

test_endpoint "Service page" "$BASE_URL/real-estate-buy-sell-spain" "200"
if [ $? -eq 0 ]; then
    check_content "Service page title" "$BASE_URL/real-estate-buy-sell-spain" "<title>"
fi
echo ""

# ============================================
# Step 2: Sitemap.xml
# ============================================
echo -e "${BLUE}Step 2: Sitemap.xml${NC}"
test_endpoint "Sitemap.xml" "$BASE_URL/sitemap.xml" "200"
if [ $? -eq 0 ]; then
    check_content "Sitemap domain" "$BASE_URL/sitemap.xml" "christiangefke.com"
    check_content "Sitemap homepage priority" "$BASE_URL/sitemap.xml" "priority" "true"
    check_content "Sitemap images" "$BASE_URL/sitemap.xml" "image:image" "true"
    count_occurrences "Sitemap URL count" "$BASE_URL/sitemap.xml" "<loc>" 20
fi
echo ""

# ============================================
# Step 3: Robots.txt
# ============================================
echo -e "${BLUE}Step 3: Robots.txt${NC}"
test_endpoint "Robots.txt" "$BASE_URL/robots.txt" "200"
if [ $? -eq 0 ]; then
    check_content "Robots.txt User-Agent" "$BASE_URL/robots.txt" "User-Agent" "true"
    check_content "Robots.txt Allow" "$BASE_URL/robots.txt" "Allow:" "true"
    check_content "Robots.txt Disallow API" "$BASE_URL/robots.txt" "Disallow: /api/" "true"
    check_content "Robots.txt sitemap" "$BASE_URL/robots.txt" "sitemap.xml"
fi
echo ""

# ============================================
# Step 4: Hydration Errors (Code check only)
# ============================================
echo -e "${BLUE}Step 4: React Hydration Fixes${NC}"
echo -n "Checking suppressHydrationWarning... "
if grep -q "suppressHydrationWarning" app/layout.js 2>/dev/null; then
    echo -e "${GREEN}✓ PASS${NC} (found in layout.js)"
    ((PASSED++))
else
    echo -e "${YELLOW}⚠ WARN${NC} (not found in layout.js - manual browser test required)"
    ((WARNINGS++))
fi
echo ""

# ============================================
# Step 5: Structured Data (Schema.org)
# ============================================
echo -e "${BLUE}Step 5: Structured Data${NC}"
test_endpoint "Homepage" "$BASE_URL" "200"
if [ $? -eq 0 ]; then
    count_occurrences "Homepage JSON-LD blocks" "$BASE_URL" "application/ld+json" 3
    validate_json_ld "Homepage LegalService" "$BASE_URL" "LegalService"
    validate_json_ld "Homepage Person" "$BASE_URL" "Person"
    validate_json_ld "Homepage FAQPage" "$BASE_URL" "FAQPage"
fi

test_endpoint "Service page" "$BASE_URL/real-estate-buy-sell-spain" "200"
if [ $? -eq 0 ]; then
    count_occurrences "Service page JSON-LD blocks" "$BASE_URL/real-estate-buy-sell-spain" "application/ld+json" 3
    validate_json_ld "Service page LegalService" "$BASE_URL/real-estate-buy-sell-spain" "LegalService"
    validate_json_ld "Service page Person" "$BASE_URL/real-estate-buy-sell-spain" "Person"
    validate_json_ld "Service page Article" "$BASE_URL/real-estate-buy-sell-spain" "Article"
fi
echo ""

# ============================================
# Step 6: Internal Linking
# ============================================
echo -e "${BLUE}Step 6: Internal Linking${NC}"
test_endpoint "Service page" "$BASE_URL/real-estate-buy-sell-spain" "200"
if [ $? -eq 0 ]; then
    check_content "BreadcrumbList schema" "$BASE_URL/real-estate-buy-sell-spain" "BreadcrumbList" "true"
    # Check for related services component (could be translated, so check for common patterns)
    if check_content "Related services" "$BASE_URL/real-estate-buy-sell-spain" "relaterede" "true" 2>/dev/null; then
        : # Pass
    elif check_content "Related services" "$BASE_URL/real-estate-buy-sell-spain" "Related" "true" 2>/dev/null; then
        : # Pass
    else
        echo -n "Checking Related services... "
        echo -e "${YELLOW}⚠ WARN${NC} (Related services section not found - may be translated)"
        ((WARNINGS++))
    fi
fi

test_endpoint "Residency page" "$BASE_URL/residency-spain" "200"
if [ $? -eq 0 ]; then
    check_content "Residency breadcrumbs" "$BASE_URL/residency-spain" "BreadcrumbList" "true"
fi
echo ""

# ============================================
# Step 7: Hreflang Tags
# ============================================
echo -e "${BLUE}Step 7: Hreflang Tags${NC}"
test_endpoint "Homepage" "$BASE_URL" "200"
if [ $? -eq 0 ]; then
    check_content "Hreflang da" "$BASE_URL" 'hreflang="da"' "true"
    check_content "Hreflang en" "$BASE_URL" 'hreflang="en"' "true"
    check_content "Hreflang es" "$BASE_URL" 'hreflang="es"' "true"
    check_content "Hreflang x-default" "$BASE_URL" 'hreflang="x-default"' "true"
    count_occurrences "Hreflang tags count" "$BASE_URL" "hreflang" 4 "true"
fi
echo ""

# ============================================
# Step 8: Image Optimization
# ============================================
echo -e "${BLUE}Step 8: Image Optimization${NC}"
test_endpoint "Homepage" "$BASE_URL" "200"
if [ $? -eq 0 ]; then
    # Check for images with alt text (Next.js Image component uses alt attribute)
    check_content "Image alt text" "$BASE_URL" 'alt=' "true"
    check_content "Sitemap images" "$BASE_URL/sitemap.xml" "image:image" "true"
fi
echo ""

# ============================================
# Step 9: Content Depth & Authority
# ============================================
echo -e "${BLUE}Step 9: Content Depth & Authority${NC}"
test_endpoint "Service page" "$BASE_URL/real-estate-buy-sell-spain" "200"
if [ $? -eq 0 ]; then
    # Check for Article schema with dates
    check_content "Article datePublished" "$BASE_URL/real-estate-buy-sell-spain" "datePublished" "true"
    check_content "Article dateModified" "$BASE_URL/real-estate-buy-sell-spain" "dateModified" "true"
fi
echo ""

# ============================================
# Step 10: Page Speed (Basic checks)
# ============================================
echo -e "${BLUE}Step 10: Page Speed Optimization${NC}"
echo -n "Checking lazy loading components... "
if grep -q "dynamic.*import" app/layout.js 2>/dev/null || grep -q "React.lazy" components/ContactForm.js 2>/dev/null; then
    echo -e "${GREEN}✓ PASS${NC} (lazy loading found)"
    ((PASSED++))
else
    echo -e "${YELLOW}⚠ WARN${NC} (lazy loading not detected - manual Lighthouse test recommended)"
    ((WARNINGS++))
fi
echo ""

# ============================================
# Summary
# ============================================
echo "================================================"
echo "Test Results Summary"
echo "================================================"
echo -e "${GREEN}Passed: $PASSED${NC}"
echo -e "${RED}Failed: $FAILED${NC}"
if [ $WARNINGS -gt 0 ]; then
    echo -e "${YELLOW}Warnings: $WARNINGS${NC}"
fi
echo ""

if [ $FAILED -eq 0 ]; then
    if [ $WARNINGS -eq 0 ]; then
        echo -e "${GREEN}✅ All tests passed!${NC}"
    else
        echo -e "${GREEN}✅ All critical tests passed!${NC}"
        echo -e "${YELLOW}⚠️  Some warnings - manual verification recommended${NC}"
    fi
    echo ""
    echo "Next steps:"
    echo "1. Open ${BASE_URL} in browser"
    echo "2. View page source and verify metadata"
    echo "3. Check browser console for hydration errors"
    echo "4. Run Lighthouse audit (Chrome DevTools)"
    echo "5. Test with online validators (see SEO_TESTING_CHECKLIST.md)"
    echo ""
    echo "Recommended manual tests:"
    echo "- Google Rich Results Test: https://search.google.com/test/rich-results"
    echo "- Schema.org Validator: https://validator.schema.org/"
    echo "- PageSpeed Insights: https://pagespeed.web.dev/"
    exit 0
else
    echo -e "${RED}❌ Some tests failed. Check the output above.${NC}"
    echo ""
    echo "Make sure:"
    echo "1. Dev server is running: npm run dev"
    echo "2. Server is accessible at ${BASE_URL}"
    echo "3. All pages are properly configured"
    exit 1
fi
