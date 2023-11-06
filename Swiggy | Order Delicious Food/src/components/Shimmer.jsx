function ShimmerCard() {
	return (
		<div className="shimmer-card w-[250px] aspect-square flex flex-col gap-5 items-center bg-gray-50">
			<div className="shimmer-b1 w-[210px] rounded-xl aspect-square bg-slate-300"></div>
			<div className="shimmer-b2 w-[60px] h-[25px] rounded-xl bg-slate-300"></div>
			<div className="shimmer-b3 w-[150px] h-[25px] rounded-xl bg-slate-300"></div>
			<div className="shimmer-b4 w-[200px] h-[25px] rounded-xl bg-slate-300"></div>
			<div className="shimmer-b5 w-[100px] h-[25px] rounded-xl bg-slate-300"></div>
		</div>
	);
}

function Shimmer() {
	return (
		<div className="shimmer-body flex justify-center gap-10 flex-wrap">
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
	);
}
export default Shimmer;
