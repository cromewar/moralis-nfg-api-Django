from moralis import evm_api

api_key = "YOUR API KEY HERE"


def get_user_nfts(address=None, chain=None):
    params = {
        "address": address,
        "chain": chain,
        "format": "decimal",
        "limit": 10,
        "token_addresses": [],
        "cursor": "",
        "normalizeMetadata": True,
    }

    result = evm_api.nft.get_wallet_nfts(
        api_key=api_key,
        params=params,
    )

    return result
