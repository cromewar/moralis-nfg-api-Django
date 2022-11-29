from django.http import HttpResponse
from .services import get_user_nfts
import json


# Create your views here.
def get_nfts(requests):
    chain = requests.GET.get("chain")
    address = requests.GET.get("address")

    nft_response = get_user_nfts(address=address, chain=chain)
    nft_json = json.dumps(nft_response)
    return HttpResponse(nft_json)
