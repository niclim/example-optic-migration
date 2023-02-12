rulesets=("ruleset-operations" "ruleset-responses")

for ruleset in "${rulesets[@]}"
do
  yarn run esbuild "./src/rulesets/${ruleset}.ts" --bundle --main-fields=module,main --platform=node --sourcemap=inline --minify --outfile="./build/${ruleset}.js"
done
