## 1. How long did you spend on the coding assignment? What would you add to your solution if you had more time? If you didn't spend much time on the coding assignment then use this as an opportunity to explain what you would add.

I spent about 2 hours. If I had had more time, I would have added better error handling, user input validation, improved test coverage.

## 2. What was the most useful feature that was added to the latest version of your language of choice? Please include a snippet of code that shows how you've used it.

If we omit syntactic sugar like optional chaining and nullish coalescing, the most useful feature added to ES2020, in my opinion, is dynamic imports.

```typescript
import dynamic from 'next/dynamic'
import { ShareButtonProps } from './ShareButton'

export const ShareButtonLazy = dynamic<ShareButtonProps>(() => import('./ShareButton').then((mod) => mod.ShareButton))
```

## 3. How would you track down a performance issue in production? Have you ever had to do this?
Using application performance monitoring tools build upon Elastic stack or, for example, Sentry. I have experience with both. And talking about pure js performance, issues could be investigated using the Performance tab of the browser's DevTools.

## 4. What was the latest technical book you have read or tech conference you have been to? What did you learn?
Designing Data-Intensive Applications by Martin Kleppmann. It gave me a better understanding of how big-scale applications work from the backend engineer's perspective.

## 5. What do you think about this technical assessment?
Nice assignment. Concise and showing the candidate's approach to solving real-world tasks as opposite to pure algorithmic questions.

## 6. Please, describe yourself using JSON.

```json
{
    "@context": "http://www.schema.org",
    "@type": "Person",
    "name": "Dmitry Shevchenko",
    "gender": "Male",
    "nationality": "Russian",
    "birthPlace" : {
	    "@type": "Place",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Marhanets",
            "addressCountry": "USSR"
        }
    },
    "alumniOf": [
        {
            "@type": "CollegeOrUniversity",
            "name": "National University of Oil and Gas \"Gubkin University\"",
        },
    ],
    "description": "Software Engineer",
    "jobTitle": "Senior Frontend Engineer",
    "sameAs": [
        "https://www.linkedin.com/in/dmitry-shevchenko-39483744/",
        "https://stackoverflow.com/users/1525629/xcrzx",
        "https://github.com/xcrzx"
	]
}
```