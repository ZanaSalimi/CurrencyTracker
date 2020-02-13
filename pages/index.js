import "../styles/main.scss";
import Layout from "../component/Layout";
import Coins from '../component/Coins';
import fetch from 'isomorphic-unfetch';
class Index extends React.Component{
    static async getInitialProps(tst){
        const API_KEY= '7b4b7ee64c6a29b4dbdcc56679ddbe5113a132ced33f17aa3b8cd5705f0ccf57';
            const res = await fetch(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,BCH,EOS,BSV,XRP&tsyms=USD,EUR&api_key=${API_KEY}`);
            const data = await res.json();
            return{
                api: data
            }
    }
    render(){
        return(
            <Layout>
                <Coins api={this.props.api} />
            </Layout>
        )       
    }

}
export default Index;