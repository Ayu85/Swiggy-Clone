import networkLogo from "../assets/error.png"
function NetworkError() {
    return (
        <div className="network-error">
            <img src={networkLogo}  />
            <p>🔴unable to connect, please check internet connection🔴</p>
        </div>
    )
}
export default NetworkError;