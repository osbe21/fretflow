function Loader() {
    const loaderStyle = {
        width: "45px",
        aspectRatio: "0.8",
        background:
            "no-repeat repeating-linear-gradient(90deg, #000 0 20%, transparent 0 40%), no-repeat repeating-linear-gradient(90deg, #000 0 20%, transparent 0 40%), no-repeat repeating-linear-gradient(90deg, #000 0 20%, transparent 0 40%), no-repeat repeating-linear-gradient(90deg, #000 0 20%, transparent 0 40%)",
        backgroundSize: "100% 21%",
        animation: "l24 0.75s infinite alternate",
    };

    const keyframesStyle = `
    @keyframes l24 {
      0%, 10% {background-position: 0 calc(0*100%/4), 0 calc(1*100%/4), 0 calc(2*100%/4), 0 calc(3*100%/4);}
      25% {background-position: 0 calc(0*100%/4), 0 calc(1*100%/4), 0 calc(2*100%/4), 0 calc(4*100%/4);}
      50% {background-position: 0 calc(0*100%/4), 0 calc(1*100%/4), 0 calc(3*100%/4), 0 calc(4*100%/4);}
      75% {background-position: 0 calc(0*100%/4), 0 calc(2*100%/4), 0 calc(3*100%/4), 0 calc(4*100%/4);}
      90%, 100% {background-position: 0 calc(1*100%/4), 0 calc(2*100%/4), 0 calc(3*100%/4), 0 calc(4*100%/4);}
    }
  `;

    return (
        <>
            <style>{keyframesStyle}</style>
            <div style={loaderStyle}></div>
        </>
    );
}

export default Loader;
