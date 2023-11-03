function ShimmerCard() {
    return (
        <div className="shimmer-card">
            <div className="shimmer-b1"></div>
            <div className="shimmer-b2"></div>
            <div className="shimmer-b3"></div>
            <div className="shimmer-b4"></div>
            <div className="shimmer-b5"></div>
        </div>
    )
}

function Shimmer() {
    return (
        <div className="shimmer-body">
            <ShimmerCard />
            <ShimmerCard />
            <ShimmerCard />
            <ShimmerCard />
            <ShimmerCard />
            <ShimmerCard />
            <ShimmerCard />
            <ShimmerCard />
            <ShimmerCard />
            <ShimmerCard />
            <ShimmerCard />

        </div>
    )
}
export default Shimmer;