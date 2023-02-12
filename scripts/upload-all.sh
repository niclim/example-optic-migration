rulesets=("ruleset-operations" "ruleset-responses")

for ruleset in "${rulesets[@]}"
do
  optic ruleset upload ./build/${ruleset}.js
done
