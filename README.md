# Description
- Create your simple or complex monster!
- Generates a string with randomly selected parameters and an object with the same values

## Examples
- Complexity: `high`
- Casing: `upper`
- Result 
  <pre>stringified: 'ENORMOUS SCREAMING GOOGLY-EYED ROUND GREEN MONSTER',
  properties: {
    size: 'enormous',
    mood: 'screaming',
    eyes: 'googly-eyed',
    shape: 'round',
    color: 'green',
    type: 'monster'
  }</pre>

***

- Complexity: `medium`
- Casing: `capitalize`
- Result:
  <pre>stringified: 'Square-eyed square red alien',
  properties: { 
    eyes: 'square-eyed', 
    shape: 'square', 
    color: 'red', 
    type: 'alien' 
  }</pre>

***

- Complexity: `low`
- Casing: `lower`
- Result:
  <pre>stringified: 'purple alien',
  properties: { 
    color: 'purple', 
    type: 'alien'
  }</pre>

# Using as Dependency
1. Install with `npm i gimme-a-monster`
2. Add dependency  with const generateMonster = require('../dist/index.js').default;
3. Call with parameters  
    - complexity: low | medium | high
    - casing: capitalize | upper | lower
4. Example: generateMonster({complexity:'low', casing:'upper'})

#  Using in Command line
1. install globally with npm i -g gimme-a-monster
2. run gimme-a-monster
- Parameters: 
    - -cpx  or complexity [high |  medium | low]
    - -cs  or casing [capitalize | upper | lower]
- Example:
    - gimme-a-monster -cpx high -cs upper
    - gimme-a-monster --complexity=high --casing=upper
