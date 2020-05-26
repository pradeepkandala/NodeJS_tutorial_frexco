#!/bin/bash
SCORE=0
PASS=0
fail=0
TOTAL_TESTS=1

TEST_1=$( cat server.js | grep -e "createServer" -e "server.listen" | wc -l )
if [ $TEST_1 -eq 2 ]
then PASS=$((PASS + 1))
fi;
echo $TEST_1
echo "Total testcases: 1"
echo "Total testcase passed: $PASS"
echo "Total testcase fail: $fail"
SCORE=$(($PASS*100 / $TOTAL_TESTS))
echo "FS_SCORE:$SCORE%"


