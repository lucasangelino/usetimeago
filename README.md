# Welcome to useTimeAgo Hook

With this **hook** you will be able to get time elapsed from a certain moment. 



## SmartyPants

SmartyPants converts ASCII punctuation characters into "smart" typographic punctuation HTML entities. For example:

| Arguments| Require | Default|
|--|--|--|
| `timestamp` | required | null |
| `lang` | optional | es |
| `style` | optional | short |


    import { useTimeAgo } from 'usetimeagojs'
    
    const timestamp = 1683227229468;
    
    const timeAgo = useTimeAgo({ timestamp: timestamp , lang: "en", style: "long" })
    console.log( timeAgo ) // 5 days ago
