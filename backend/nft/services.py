from moralis import evm_api

api_key = "bo6U333WN5Aa2OnLzlr7uvcDzYJQPNYzwre5X0mGklSvtU9whJdflaO7Gil9cVN7"


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
