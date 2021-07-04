---
title: "HTTPie Review"
date: 2021-05-20
tags: [Review, API, HTTPie]
description: ''
---

[HTTPie](https://httpie.io/) is a great tool for simplistic API calling. Usually you'd need to write a program in order to call an API, now you can just install a [HTTPie](https://httpie.io/), and call any API with one command.

As an alternative to cURL, HTTPie is focused primarily on JSON-based REST APIs, and makes for shorter and more user-friendly commands than cURL in some situations.

To install:

```bash
sudo apt install httpie
```

Then, you can use the package using http, so for example, I wanted to get the currentprice for bitcoin, and so I searched online for a current price API link to Bitcoin, found one under https://api.coindesk.com/v1/bpi/currentprice.json, then did this:

```bash
http https://api.coindesk.com/v1/bpi/currentprice.json
```

That gave me back

```bash
HTTP/1.1 200 OK
Access-Control-Allow-Origin: *
Age: 13
Cache-Control: max-age=15
Connection: keep-alive
Content-Length: 679
Content-Type: application/javascript
Date: Fri, 21 May 2021 01:49:56 GMT
Expires: Fri, 21 May 2021 01:50:07 UTC
Server: nginx/1.18.0
Via: 1.1 0966e391a888bbbf91b4b075b1b57a83.cloudfront.net (CloudFront)
X-Amz-Cf-Id: _uWndXlT1qVlO54ieo2NZxvx-ruov6nnS4wqpP7l6d7VUMiJeZVuXw==
X-Amz-Cf-Pop: DFW55-C2
X-Cache: Hit from cloudfront
X-Powered-By: Fat-Free Framework

{
    "bpi": {
        "EUR": {
            "code": "EUR",
            "description": "Euro",
            "rate": "34,074.7321",
            "rate_float": 34074.7321,
            "symbol": "&euro;"
        },
        "GBP": {
            "code": "GBP",
            "description": "British Pound Sterling",
            "rate": "29,396.9621",
            "rate_float": 29396.9621,
            "symbol": "&pound;"
        },
        "USD": {
            "code": "USD",
            "description": "United States Dollar",
            "rate": "41,686.5247",
            "rate_float": 41686.5247,
            "symbol": "&#36;"
        }
    },
    "chartName": "Bitcoin",
    "disclaimer": "This data was produced from the CoinDesk Bitcoin Price Index (USD). Non-USD currency data converted using hourly conversion rate from openexchangerates.org",
    "time": {
        "updated": "May 21, 2021 01:49:00 UTC",
        "updatedISO": "2021-05-21T01:49:00+00:00",
        "updateduk": "May 21, 2021 at 02:49 BST"
    }
}
```
