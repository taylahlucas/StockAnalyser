from urllib.request import Request, urlopen
from bs4 import BeautifulSoup
from fake_useragent import UserAgent
import random
import os

ua = UserAgent()    # From here we generate a random user agent
proxies = []        # Will contain proxies [ip, port]

proxy_filename = os.getcwd() + '/proxies.txt'
proxy_file = open(proxy_filename, 'a+')

# Main function
def get_proxies():
    # Retrieve latest proxies
    proxies_req = Request('https://www.sslproxies.org/')
    proxies_req.add_header('User-Agent', ua.random)
    proxies_doc = urlopen(proxies_req).read().decode('utf8')

    soup = BeautifulSoup(proxies_doc, 'html.parser')
    proxies_table = soup.find(id='proxylisttable')

    # Save proxies in the array
    for row in proxies_table.tbody.find_all('tr'):
        proxy_file.write(row.find_all('td')[0].string + ':' + row.find_all('td')[1].string)

# Retrieve a random index proxy (we need the index to delete it if not working)
def random_proxy():
    return random.randint(0, len(proxies) - 1)


# proxies.append({
#   'ip':   row.find_all('td')[0].string,
#   'port': row.find_all('td')[1].string
# })

# Choose a random proxy
# proxy_index = random_proxy()
# proxy = proxies[proxy_index]
#
# proxy_list = {
#     'http': 'http://' + proxy['ip'] + ':' + proxy['port'],
#     'https': 'https://' + proxy['ip'] + ':' + proxy['port']
# }
#
# return proxy_list

# for n in range(1, 100):
#     req = Request('http://icanhazip.com')
#     req.set_proxy(proxy['ip'] + ':' + proxy['port'], 'http')
#
#     # Every 10 requests, generate a new proxy
#     if n % 10 == 0:
#       proxy_index = random_proxy()
#       proxy = proxies[proxy_index]
#
#     # Make the call
#     try:
#       my_ip = urlopen(req).read().decode('utf8')
#       print('#' + str(n) + ': ' + my_ip)
#     except: # If error, delete this proxy and find another one
#       del proxies[proxy_index]
#       print('Proxy ' + proxy['ip'] + ':' + proxy['port'] + ' deleted.')
#       proxy_index = random_proxy()
#       proxy = proxies[proxy_index]