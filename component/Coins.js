class Coins extends React.Component {
    render(){
        const { BTC, ETH, BCH, EOS, BSV, XRP } = this.props.api.DISPLAY;
        console.log(ETH);
        return(
            <div className="Cards">
                <div className="coin d-flex">
                    <div className="col-7 mt-4 ml-3">
                    <p>Bitcoin <span className="badge badge-primary">BTC</span></p>
                    <p className="font-weight-bolder">{BTC.USD.LASTVOLUME}</p>
                    <p className="text-primary font-weight-bolder">{BTC.USD.PRICE}</p>
                    </div>
                    <div className="col text-center mt-4">
                        <p className="text-success time-txt">{BTC.USD.LASTUPDATE}</p>
                        <img src="https://api.coinscrate.com/images/currencies/128/color/btc.png" alt="BTC" width="70px" />
                    </div>
                </div>
                <div className="coin d-flex">
                    <div className="col-7 mt-4 ml-3">
                    <p>ETHERIUM <span className="badge badge-primary">ETH</span></p>
                    <p className="font-weight-bolder">{ETH.USD.LASTVOLUME}</p>
                    <p className="text-primary font-weight-bolder">{ETH.USD.PRICE}</p>
                    </div>
                    <div className="col text-center mt-4">
                        <p className="text-success time-txt">{ETH.USD.LASTUPDATE}</p>
                        <img src="https://blockchainstocks.com/wp-content/uploads/2017/12/eth-logo.png" alt="ETH" width="70px" />
                    </div>
                </div>
                <div className="coin d-flex">
                    <div className="col-7 mt-4 ml-3">
                    <p>Bitcoin Cash <span className="badge badge-primary">BCH</span></p>
                    <p className="font-weight-bolder">{BCH.USD.LASTVOLUME}</p>
                    <p className="text-primary font-weight-bolder">{BCH.USD.PRICE}</p>
                    </div>
                    <div className="col text-center mt-4">
                        <p className="text-success time-txt">{BCH.USD.LASTUPDATE}</p>
                        <img src="https://api.coinscrate.com/images/currencies/128/color/btc.png" alt="BCH" width="70px" />
                    </div>
                </div>
                <div className="coin d-flex">
                    <div className="col-7 mt-4 ml-3">
                    <p>EOS <span className="badge badge-primary">EOS</span></p>
                    <p className="font-weight-bolder">{EOS.USD.LASTVOLUME}</p>
                    <p className="text-primary font-weight-bolder">{EOS.USD.PRICE}</p>
                    </div>
                    <div className="col text-center mt-4">
                        <p className="text-success time-txt">{EOS.USD.LASTUPDATE}</p>
                        <img src="https://api.coinscrate.com/images/currencies/128/color/eos.png" alt="EOS" width="70px" />
                    </div>
                </div>
                <div className="coin d-flex">
                    <div className="col-7 mt-4 ml-3">
                    <p>Bitcoin SV <span className="badge badge-primary">BSV</span></p>
                    <p className="font-weight-bolder">{BSV.USD.LASTVOLUME}</p>
                    <p className="text-primary font-weight-bolder">{BSV.USD.PRICE}</p>
                    </div>
                    <div className="col text-center mt-4">
                        <p className="text-success time-txt">{BSV.USD.LASTUPDATE}</p>
                        <img src="https://api.coinscrate.com/images/currencies/128/color/btc.png" alt="BSV" width="70px" />
                    </div>
                </div>
                <div className="coin d-flex">
                    <div className="col-7 mt-4 ml-3">
                    <p>XRP <span className="badge badge-primary">XRP</span></p>
                    <p className="font-weight-bolder">{XRP.USD.LASTVOLUME}</p>
                    <p className="text-primary font-weight-bolder">{XRP.USD.PRICE}</p>
                    </div>
                    <div className="col text-center mt-4">
                        <p className="text-success time-txt">{XRP.USD.LASTUPDATE}</p>
                        <img src="https://www.pinclipart.com/picdir/big/12-122739_xrp-logo-png-clipart.png" alt="XRP" width="70px" />
                    </div>
                </div>
            </div>
        )
    }
}
export default Coins;