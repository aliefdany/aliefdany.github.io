import { Fragment, useRef } from "react";
import logoFILKOM from "url:../../img/logo-filkom-ub.png"; // eslint-disable-line
import { CSSTransition } from "react-transition-group";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

const Homepage2 = ({
  toggleActive,
  toggleAnimate1,
  toggleAnimate2,
  toggleAnimate3,
  animate,
  halfHeight,
}) => {
  const page2 = useRef();

  useScrollPosition(
    ({ currPos }) => {
      if (currPos.y <= halfHeight && currPos.y >= -halfHeight) {
        toggleActive("profile");
        toggleAnimate2(true);
        toggleAnimate1(false);
        toggleAnimate3(false);
      }
    },
    [],
    page2
  );
  return (
    <Fragment>
      <div ref={page2} className="separator with-bg" id="profile"></div>
      <div className="page">
        <svg
          className="bg"
          viewBox="0 0 1920 963"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <CSSTransition in={animate} timeout={400} classNames="animate-left">
            <path
              className="svg-bg-path"
              d="M79.3708 429C54.9084 429 31.9965 423.681 10.635 413.044C0.987843 408.39 -7.10886 402.905 -13.6551 396.589C-18.4787 404.235 -24.5082 411.049 -31.7435 417.033C-37.9452 421.354 -41.3906 423.681 -42.0797 424.014H-55V329.274H-34.3276C-29.1595 345.563 -21.9241 360.189 -12.6215 373.153C8.39547 402.074 35.6142 416.534 69.0346 416.534C88.6734 416.534 104.35 410.883 116.064 399.581C127.779 388.279 133.636 373.153 133.636 354.205C133.636 343.236 130.191 333.429 123.3 324.786C116.753 316.143 108.485 308.498 98.4928 301.849C88.5012 295.201 74.5473 286.89 56.6312 276.918C33.8915 264.618 15.4586 253.482 1.33239 243.51C-12.7938 233.537 -24.8527 221.071 -34.8444 206.112C-44.8361 190.821 -49.8319 172.87 -49.8319 152.26C-49.8319 135.972 -45.1806 121.345 -35.878 108.381C-26.2309 95.084 -11.9324 84.6128 7.01731 76.9671C25.967 68.989 49.2235 65 76.7868 65C96.7701 65 116.753 70.4849 136.737 81.4548C144.317 85.4438 151.897 90.7626 159.477 97.411C165.334 88.768 171.363 81.9534 177.565 76.9671C183.767 72.6457 187.212 70.3187 187.901 69.9863H200.821V164.726H180.149C175.67 148.77 168.951 134.31 159.993 121.345C151.724 108.713 141.388 98.242 128.985 89.9315C116.926 81.621 102.972 77.4657 87.123 77.4657C73.6859 77.4657 62.1438 82.6183 52.4967 92.9233C42.8495 103.228 38.026 116.359 38.026 132.315C38.026 144.615 41.6436 155.751 48.879 165.723C56.4589 175.363 65.5892 183.84 76.27 191.153C87.2953 198.467 102.111 207.276 120.716 217.581C142.422 229.548 159.993 240.185 173.43 249.493C186.868 258.801 198.237 270.436 207.54 284.397C216.843 298.026 221.494 313.816 221.494 331.767C221.494 349.718 216.153 366.173 205.473 381.132C194.792 395.758 178.771 407.393 157.409 416.036C136.048 424.679 110.035 429 79.3708 429ZM394.484 429C350.383 429 316.101 417.365 291.639 394.096C267.176 370.494 254.945 338.083 254.945 296.863C254.945 269.937 260.286 246.501 270.966 226.556C281.647 206.611 296.462 191.32 315.412 180.682C334.706 170.045 356.757 164.726 381.564 164.726C406.371 164.726 428.077 169.214 446.682 178.189C465.632 187.164 480.102 199.298 490.094 214.589C500.43 229.548 505.598 246.169 505.598 264.452C505.598 272.763 504.737 279.91 503.014 285.893L500.43 294.37C485.615 297.362 469.594 299.855 452.367 301.849C416.19 306.836 379.669 309.329 342.803 309.329C342.803 347.889 348.316 375.48 359.341 392.101C370.366 408.39 385.526 416.534 404.82 416.534C418.257 416.534 430.661 413.542 442.031 407.559C453.745 401.243 462.875 393.099 469.422 383.126C476.312 372.821 479.758 362.35 479.758 351.712H492.678C492.678 365.009 488.544 377.641 480.275 389.608C472.006 401.575 460.464 411.216 445.648 418.529C430.833 425.51 413.778 429 394.484 429ZM342.803 296.863C364.854 296.863 382.77 296.032 396.551 294.37C402.409 294.037 408.61 293.206 415.157 291.877C415.501 290.215 416.362 286.558 417.741 280.907C419.463 272.596 420.325 263.787 420.325 254.479C420.325 226.889 416.535 206.777 408.955 194.145C401.375 181.181 392.245 174.699 381.564 174.699C355.723 174.699 342.803 215.42 342.803 296.863ZM544.138 414.041L575.146 406.562V87.4384L544.138 79.9589V72.4795H611.323C642.332 72.4795 657.833 87.4384 657.833 117.356V406.562L688.842 414.041V421.521H544.138V414.041ZM717.187 414.041L748.196 406.562V194.644H712.019V182.178H748.196V157.247C748.196 139.628 752.503 123.838 761.116 109.877C770.074 95.9151 782.65 84.9452 798.843 76.9671C815.381 68.989 834.676 65 856.726 65C874.642 65 889.974 67.6594 902.722 72.9781C915.815 77.9644 925.634 84.779 932.181 93.4219C938.727 101.732 942 110.542 942 119.849C942 131.152 938.382 140.293 931.147 147.274C924.256 153.922 914.954 157.247 903.239 157.247C898.416 157.247 893.592 156.914 888.768 156.249L882.567 154.753V77.4657L877.915 76.4685C876.537 76.1361 874.987 75.8036 873.264 75.4712C871.541 75.1388 869.474 74.9726 867.062 74.9726C855.348 74.9726 846.39 80.9562 840.188 92.9233C833.987 104.558 830.886 125.999 830.886 157.247V182.178H913.575V194.644H830.886V406.562L861.894 414.041V421.521H717.187V414.041Z"
              fill="#484539"
              fillOpacity="0.05"
            />
          </CSSTransition>
          <CSSTransition in={animate} timeout={400} classNames="animate-right">
            <path
              className="svg-bg-path"
              d="M226 872.041L256.983 864.562V545.438L226 537.959V530.479H370.587C427.733 530.479 468.699 539.621 493.485 557.904C518.271 575.855 530.664 602.448 530.664 637.685C530.664 672.921 518.271 699.681 493.485 717.964C468.699 735.915 427.733 744.89 370.587 744.89H342.186V864.562L373.168 872.041V879.521H226V872.041ZM370.587 732.425C392.274 732.425 409.659 724.447 422.741 708.49C436.167 692.534 442.88 668.932 442.88 637.685C442.88 606.77 436.167 583.334 422.741 567.378C409.659 551.09 392.274 542.945 370.587 542.945H342.186V732.425H370.587ZM569.292 872.041L600.275 864.562V645.164L569.292 637.685V630.205H615.766C636.077 630.205 652.086 636.521 663.79 649.153C668.266 654.14 672.052 660.29 675.151 667.603C680.314 660.29 686.683 653.641 694.257 647.658C711.469 634.361 730.748 627.712 752.091 627.712C770.337 627.712 783.935 631.868 792.885 640.178C802.18 648.156 806.828 659.791 806.828 675.082C806.828 686.385 803.213 695.526 795.984 702.507C789.099 709.155 779.804 712.479 768.099 712.479C763.279 712.479 758.46 712.147 753.64 711.482L747.444 709.986V640.178C729.887 640.178 713.879 646.826 699.42 660.123C692.535 666.772 687.027 673.42 682.896 680.068V864.562L713.879 872.041V879.521H569.292V872.041ZM966.848 887C924.161 887 890.596 875.365 866.154 852.096C842.056 828.494 830.007 796.083 830.007 754.863C830.007 713.643 842.056 681.398 866.154 658.129C890.596 634.527 924.161 622.726 966.848 622.726C1009.54 622.726 1042.93 634.527 1067.03 658.129C1091.47 681.398 1103.69 713.643 1103.69 754.863C1103.69 796.083 1091.47 828.494 1067.03 852.096C1042.93 875.365 1009.54 887 966.848 887ZM966.848 877.027C980.618 877.027 992.151 867.72 1001.45 849.104C1011.08 830.489 1015.9 799.075 1015.9 754.863C1015.9 710.651 1011.08 679.237 1001.45 660.622C992.151 642.006 980.618 632.699 966.848 632.699C953.078 632.699 941.373 642.006 931.734 660.622C922.439 679.237 917.792 710.651 917.792 754.863C917.792 799.075 922.439 830.489 931.734 849.104C941.373 867.72 953.078 877.027 966.848 877.027ZM1142.6 872.041L1173.58 864.562V652.644H1137.43V640.178H1173.58V615.247C1173.58 597.628 1177.88 581.838 1186.49 567.877C1195.44 553.915 1208.01 542.945 1224.18 534.967C1240.71 526.989 1259.99 523 1282.02 523C1299.92 523 1315.24 525.659 1327.98 530.978C1341.06 535.964 1350.87 542.779 1357.41 551.422C1363.95 559.732 1367.22 568.542 1367.22 577.849C1367.22 589.152 1363.61 598.293 1356.38 605.274C1349.49 611.922 1340.2 615.247 1328.49 615.247C1323.67 615.247 1318.85 614.914 1314.04 614.249L1307.84 612.753V535.466L1303.19 534.469C1301.81 534.136 1300.26 533.804 1298.54 533.471C1296.82 533.139 1294.76 532.973 1292.35 532.973C1280.64 532.973 1271.69 538.956 1265.5 550.923C1259.3 562.558 1256.2 583.999 1256.2 615.247V640.178H1338.82V652.644H1256.2V864.562L1287.18 872.041V879.521H1142.6V872.041ZM1369.58 872.041L1400.56 864.562V645.164L1369.58 637.685V630.205H1436.71C1467.69 630.205 1483.19 645.164 1483.19 675.082V864.562L1514.17 872.041V879.521H1369.58V872.041ZM1436.71 600.288C1426.38 600.288 1417.78 596.963 1410.89 590.315C1404.01 583.667 1400.56 575.356 1400.56 565.384C1400.56 555.411 1404.01 547.1 1410.89 540.452C1417.78 533.804 1426.38 530.479 1436.71 530.479C1447.04 530.479 1455.65 533.804 1462.53 540.452C1469.42 547.1 1472.86 555.411 1472.86 565.384C1472.86 575.356 1469.42 583.667 1462.53 590.315C1455.65 596.963 1447.04 600.288 1436.71 600.288ZM1545.07 872.041L1576.06 864.562V545.438L1545.07 537.959V530.479H1612.2C1643.18 530.479 1658.68 545.438 1658.68 575.356V864.562L1689.66 872.041V879.521H1545.07V872.041ZM1859.98 887C1815.91 887 1781.66 875.365 1757.22 852.096C1732.78 828.494 1720.56 796.083 1720.56 754.863C1720.56 727.937 1725.89 704.501 1736.56 684.556C1747.24 664.611 1762.04 649.32 1780.97 638.682C1800.25 628.045 1822.28 622.726 1847.07 622.726C1871.85 622.726 1893.54 627.214 1912.13 636.189C1931.07 645.164 1945.53 657.298 1955.51 672.589C1965.84 687.548 1971 704.169 1971 722.452C1971 730.763 1970.14 737.91 1968.42 743.893L1965.84 752.37C1951.03 755.362 1935.03 757.855 1917.81 759.849C1881.67 764.836 1845.18 767.329 1808.34 767.329C1808.34 805.89 1813.85 833.48 1824.86 850.101C1835.88 866.39 1851.03 874.534 1870.31 874.534C1883.73 874.534 1896.12 871.542 1907.49 865.559C1919.19 859.243 1928.31 851.099 1934.85 841.126C1941.74 830.821 1945.18 820.35 1945.18 809.712H1958.09C1958.09 823.009 1953.96 835.641 1945.7 847.608C1937.44 859.575 1925.9 869.215 1911.1 876.529C1896.3 883.51 1879.26 887 1859.98 887ZM1808.34 754.863C1830.37 754.863 1848.27 754.032 1862.04 752.37C1867.9 752.037 1874.09 751.206 1880.63 749.877C1880.98 748.215 1881.84 744.558 1883.22 738.907C1884.94 730.596 1885.8 721.787 1885.8 712.479C1885.8 684.889 1882.01 664.777 1874.44 652.145C1866.86 639.181 1857.74 632.699 1847.07 632.699C1821.25 632.699 1808.34 673.42 1808.34 754.863Z"
              fill="#484539"
              fillOpacity="0.05"
            />
          </CSSTransition>
        </svg>

        <div className="homepage-content">
          <CSSTransition in={animate} timeout={400} classNames="animate-left">
            <img src={logoFILKOM} alt="logo-filkom" className="logo-filkom" />
          </CSSTransition>
          <CSSTransition in={animate} timeout={400} classNames="animate-right">
            <div className="text">
              <h4>ACADEMIC PROFILE</h4>
              <h1>Brawijaya University</h1>
              <p>
                Faculty of Computer Science <br /> Department of Information
                System <br />
                (2019 - Now)
              </p>
              <a
                href="https://filkom.ub.ac.id"
                target="_blank"
                rel="noreferrer"
                className="button-like"
              >
                Visit Site
              </a>
            </div>
          </CSSTransition>
        </div>
      </div>
    </Fragment>
  );
};

export default Homepage2;
