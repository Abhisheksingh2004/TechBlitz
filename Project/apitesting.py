import requests

url = "https://yahoo-finance15.p.rapidapi.com/api/v1/markets/stock/quotes"

querystring = {"ticker":"AAPL,MSFT,^SPX,^NYA,GAZP.ME,SIBN.ME,GEECEE.NS"}

headers = {
	"x-rapidapi-key": "566a179984mshd81207e37cd637bp13123ejsnbd89327407bb",
	"x-rapidapi-host": "yahoo-finance15.p.rapidapi.com"
}

response = requests.get(url, headers=headers, params=querystring)

print(response.json())