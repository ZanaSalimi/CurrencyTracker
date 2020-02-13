import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
class Layout extends React.Component{
    render(){
        return(
            <div>
                <Head>
                    <title>Currency Tracker</title>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" />
                    <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet"></link>
                </Head>
                <Header />
                <div className="container">
                {this.props.children}
                </div>
                <Footer />
            </div>
        )
    }
}
export default Layout;