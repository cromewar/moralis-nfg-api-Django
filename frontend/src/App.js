import "./App.css";
import { useState } from "react";
import { Button, Input, Select } from "antd";
import { Card } from "antd";
import axios from "axios";

function App() {
  // State Variables
  const [nfts, setNfts] = useState(null);
  const [chain, setChain] = useState("");
  const [address, setAddress] = useState("");

  const refreshNfts = async () => {
    await axios
      .get(`/get_nfts?chain=${chain}&address=${address}`)
      .then((res) => setNfts(res.data.result))
      .catch((err) => console.log(err));
  };

  const handleChainChange = (value) => {
    setChain(value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const renderedNFTS =
    nfts &&
    Object.values(nfts).map((nft) => {
      return (
        <Card
          className="result-card"
          title={nft.name}
          extra={
            <p>
              <b>token id:</b> {nft.token_id}
            </p>
          }
          style={{ width: 300 }}
        >
          <div className="result-element">
            <p className="result-begin">Token Address:</p>
            <p className="result-end">{nft.token_address}</p>
          </div>
          <div className="result-element">
            <p className="result-begin">Block Number:</p>
            <p className="result-end">{nft.block_number}</p>
          </div>
          <div className="result-element">
            <p className="result-begin">Token Hash:</p>
            <p className="result-end">{nft.token_hash}</p>
          </div>
        </Card>
      );
    });

  return (
    <div className="nft-app">
      <div className="App">
        <h1> Get Wallet NFT's</h1>
      </div>
      <div className="wallet">
        <div className="d-text">Wallet:</div>
        <Input
          className="input"
          size="large"
          value={address}
          name="address"
          onChange={handleAddressChange}
        />
      </div>
      <div className="chains">
        <div className="d-text">Chains:</div>
        <Select
          className="input"
          style={{ width: 120 }}
          name="chain"
          value={chain}
          onChange={handleChainChange}
        >
          <option value="eth">Ethereum</option>
          <option value="goerli">Goerli</option>
          <option value="polygon">Polygon</option>
          <option value="mumbai">Mumbai</option>
          <option value="bsc">Binance</option>
        </Select>
      </div>
      <div className="bu">
        <Button
          type="primary"
          className="butt"
          shape="round"
          size="large"
          onClick={refreshNfts}
        >
          Get NFT's
        </Button>
      </div>
      <div className="results">
        {nfts && <div className="nfts">{renderedNFTS}</div>}
      </div>
    </div>
  );
}

export default App;
