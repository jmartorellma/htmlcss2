module.exports = {
    "extends": "stylelint-config-standard",
    "plugins": [
      "stylelint-scss"
    ],
    "rules": {
      "at-rule-no-unknown": [
        true,
        {
          "ignoreAtRules": [
            "apply",
            "at-root",
            "responsive",
            "screen",
            "tailwind",
            "use",
            "variants"
          ]
        }
      ],
      "declaration-empty-line-before": null,
      "function-comma-newline-after": "always-multi-line",
      "function-comma-newline-before": "never-multi-line",
      "function-comma-space-after": "always-single-line",
      "function-comma-space-before": "never",    
      "indentation": 2,
      "max-line-length": 80,
      "max-empty-lines": 5,
      "no-descending-specificity": null,
      "no-eol-whitespace": null,    
      "selector-nested-pattern": "^&",
      "value-keyword-case": null    
    }
  }