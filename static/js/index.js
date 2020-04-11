// import NavigationController from "./components/NavigationController";
import PortfolioListController from "./components/PortfolioListController";
import MagneticCtaController from "./components/MagneticCtaController";
import HotspotsController from "./components/HotspotsController";
import ThreeDPhotosController from "./components/ThreeDPhotosController";
import RGBSplittingController from "./components/RGBSplittingController";
import Dummy from "./components/Dummy";

function ready(callbackFunc) {
    if (document.readyState !== "loading") {
        /**
         * Document is already ready, call the callback directly
         */
        callbackFunc();
    } else if (document.addEventListener) {
        /**
         * All modern browsers to register DOMContentLoaded
         */
        document.addEventListener("DOMContentLoaded", callbackFunc);
    } else {
        /**
         * Old IE browsers
         */
        document.attachEvent("onreadystatechange", function () {
            if (document.readyState === "complete") {
                callbackFunc();
            }
        });
    }
}

/**
 * Document ready callback
 */
ready(function () {
    // const dummy = new Dummy();
    // dummy.init();

    // const navigation = new NavigationController();
    // navigation.init();

    var consoleLogStyle = [
        "background-color: #000000",
        "color: white",
        "display: block",
        "line-height: 24px",
        "text-align: center",
        "border: 1px solid #ffffff",
        "font-weight: bold",
    ].join(";");

    console.log("dev by: %c Bornfight ", consoleLogStyle);

    if (document.getElementById("portfolio") !== null) {
        const portfolioList = new PortfolioListController();
        portfolioList.init();
    }

    if (document.getElementById("hotspots") !== null) {
        const magneticCta = new MagneticCtaController();
        magneticCta.init();

        const hotspots = new HotspotsController();
        hotspots.init();
    }

    if (document.getElementById("faux-3d") !== null) {
        const threeDPhotos = new ThreeDPhotosController();
        threeDPhotos.init();
    }

    if (document.getElementById("rgb-splitting") !== null) {
        const RGBSplitting = new RGBSplittingController();
        RGBSplitting.init();
    }
});
