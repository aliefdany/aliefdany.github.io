import { Fragment } from "react";
import { CSSTransition } from "react-transition-group";

const Contacts = () => {
  return (
    <Fragment>
      <CSSTransition
        in={true}
        timeout={400}
        classNames="animate-left-delay"
        appear
      >
        <ul className="vnav">
          <li>
            <a href="#contacts" style={{ color: "hsl(169, 38%, 38%)" }}>
              —Contact
            </a>
          </li>
        </ul>
      </CSSTransition>
      <div className="separator" id="contacts"></div>
      <div className="page">
        <svg
          className="bg"
          viewBox="0 0 1920 961"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <CSSTransition
            in={true}
            timeout={400}
            classNames="animate-left"
            appear
          >
            <path
              className="svg-bg-path"
              d="M-87 408.753L-45.8201 393.507L95.7356 55.5411H111.178L257.881 401.13L283.619 408.753V416.377H221.849C204.004 416.377 189.42 412.48 178.095 404.688C166.771 396.556 158.363 386.053 152.873 373.178L126.621 312.192H3.5957L-30.3777 393.507L8.22842 408.753V416.377H-87V408.753ZM8.74317 299.486H121.473L64.8507 165.825L8.74317 299.486ZM293.753 408.753L324.638 401.13V75.8699L293.753 68.2466V60.6233H360.67C391.555 60.6233 406.997 75.8699 406.997 106.363V401.13L437.882 408.753V416.377H293.753V408.753ZM468.687 408.753L499.572 401.13V177.514L468.687 169.89V162.267H535.604C566.489 162.267 581.932 177.514 581.932 208.007V401.13L612.817 408.753V416.377H468.687V408.753ZM535.604 131.774C525.31 131.774 516.73 128.386 509.867 121.61C503.004 114.833 499.572 106.363 499.572 96.1986C499.572 86.0342 503.004 77.5639 509.867 70.7877C516.73 64.0114 525.31 60.6233 535.604 60.6233C545.899 60.6233 554.479 64.0114 561.342 70.7877C568.205 77.5639 571.637 86.0342 571.637 96.1986C571.637 106.363 568.205 114.833 561.342 121.61C554.479 128.386 545.899 131.774 535.604 131.774ZM782.603 424C738.678 424 704.533 412.142 680.168 388.425C655.803 364.369 643.621 331.335 643.621 289.322C643.621 261.878 648.94 237.992 659.578 217.663C670.216 197.334 684.972 181.749 703.846 170.907C723.064 160.065 745.026 154.644 769.734 154.644C794.442 154.644 816.061 159.218 834.592 168.366C853.466 177.514 867.88 189.88 877.831 205.466C888.126 220.712 893.274 237.653 893.274 256.288C893.274 264.758 892.416 272.042 890.7 278.141L888.126 286.781C873.37 289.83 857.413 292.371 840.255 294.404C804.222 299.486 767.847 302.027 731.128 302.027C731.128 341.33 736.619 369.451 747.6 386.392C758.581 402.994 773.681 411.294 792.898 411.294C806.281 411.294 818.635 408.245 829.96 402.147C841.627 395.709 850.721 387.408 857.241 377.244C864.105 366.741 867.536 356.068 867.536 345.226H880.405C880.405 358.779 876.287 371.653 868.051 383.851C859.815 396.048 848.319 405.874 833.563 413.327C818.807 420.442 801.82 424 782.603 424ZM731.128 289.322C753.091 289.322 770.935 288.475 784.662 286.781C790.496 286.442 796.673 285.595 803.193 284.24C803.536 282.546 804.394 278.819 805.767 273.059C807.482 264.589 808.34 255.61 808.34 246.123C808.34 218.002 804.565 197.504 797.016 184.629C789.466 171.415 780.372 164.808 769.734 164.808C743.997 164.808 731.128 206.313 731.128 289.322ZM929.085 408.753L959.969 401.13V185.137H923.937V172.432H959.969V147.021C959.969 129.063 964.259 112.97 972.838 98.7397C981.76 84.5096 994.286 73.3288 1010.41 65.1973C1026.89 57.0657 1046.1 53 1068.07 53C1085.91 53 1101.18 55.7105 1113.88 61.1315C1126.92 66.2137 1136.7 73.1594 1143.22 81.9685C1149.74 90.4388 1153 99.4174 1153 108.904C1153 120.424 1149.4 129.741 1142.19 136.856C1135.33 143.632 1126.06 147.021 1114.39 147.021C1109.59 147.021 1104.79 146.682 1099.98 146.004L1093.8 144.479V65.7055L1089.17 64.689C1087.8 64.3502 1086.25 64.0114 1084.54 63.6726C1082.82 63.3338 1080.76 63.1644 1078.36 63.1644C1066.69 63.1644 1057.77 69.263 1051.59 81.4603C1045.42 93.3187 1042.33 115.172 1042.33 147.021V172.432H1124.69V185.137H1042.33V401.13L1073.21 408.753V416.377H929.085V408.753Z"
              fill="#484539"
              fillOpacity="0.05"
            />
          </CSSTransition>
          <CSSTransition
            in={true}
            timeout={400}
            classNames="animate-right"
            appear
          >
            <path
              className="svg-bg-path"
              d="M721 875.115L751.892 867.492V542.246L721 534.623V527H852.29C913.73 527 960.754 542.585 993.361 573.754C1026.31 604.924 1042.79 648.628 1042.79 704.869C1042.79 761.109 1026.31 804.814 993.361 835.984C960.754 867.153 913.73 882.738 852.29 882.738H721V875.115ZM852.29 870.033C884.211 870.033 908.924 857.328 926.43 831.918C943.935 806.169 952.687 763.82 952.687 704.869C952.687 645.918 943.935 603.738 926.43 578.328C908.924 552.579 884.211 539.705 852.29 539.705H836.844V870.033H852.29ZM1184.3 890.361C1153.75 890.361 1130.24 883.923 1113.76 871.049C1097.28 858.175 1089.05 841.743 1089.05 821.754C1089.05 808.541 1091.96 795.497 1097.8 782.623C1100.2 776.525 1103.29 770.934 1107.07 765.852C1121.14 762.465 1136.41 759.415 1152.89 756.705C1189.96 750.607 1222.74 746.88 1251.23 745.525V730.279C1251.23 692.672 1246.59 666.754 1237.33 652.525C1228.06 638.295 1213.81 631.18 1194.59 631.18C1187.39 631.18 1181.21 632.027 1176.06 633.721L1168.85 636.262V712.492L1162.16 714.016C1156.67 714.694 1152.03 715.033 1148.26 715.033C1136.59 715.033 1127.15 711.645 1119.94 704.869C1113.07 697.754 1109.64 688.437 1109.64 676.918C1109.64 661.333 1117.54 648.12 1133.32 637.279C1149.46 626.437 1173.31 621.016 1204.89 621.016C1231.66 621.016 1254.66 625.76 1273.88 635.246C1293.45 644.393 1308.21 657.268 1318.16 673.869C1328.46 690.131 1333.61 708.934 1333.61 730.279V867.492L1364.5 875.115V882.738H1318.16C1297.57 882.738 1281.6 876.47 1270.28 863.934C1265.47 858.852 1261.7 852.415 1258.95 844.623C1254.15 853.093 1248.48 860.716 1241.96 867.492C1226.51 882.738 1207.29 890.361 1184.3 890.361ZM1204.89 872.574C1217.59 872.574 1229.09 865.798 1239.39 852.246C1243.16 847.164 1247.11 840.388 1251.23 831.918V758.23C1235.44 758.23 1220.34 759.077 1205.92 760.771C1195.28 762.126 1188.07 762.973 1184.3 763.312C1182.58 767.038 1180.86 772.12 1179.15 778.557C1175.72 791.432 1174 804.137 1174 816.672C1174 835.645 1176.92 849.705 1182.75 858.852C1188.59 868 1195.97 872.574 1204.89 872.574ZM1395.63 875.115L1426.52 867.492V643.885L1395.63 636.262V628.639H1441.97C1462.22 628.639 1478.18 635.077 1489.85 647.951C1494.31 653.033 1498.09 659.301 1501.18 666.754C1505.98 657.945 1511.65 650.322 1518.17 643.885C1533.61 628.639 1552.84 621.016 1575.83 621.016C1595.06 621.016 1612.22 625.082 1627.32 633.213C1642.77 641.006 1654.78 651.339 1663.36 664.213C1671.94 677.087 1676.23 690.639 1676.23 704.869V867.492L1707.12 875.115V882.738H1640.19C1609.3 882.738 1593.85 867.492 1593.85 837V704.869C1593.85 683.525 1589.91 667.262 1582.01 656.082C1574.46 644.563 1565.54 638.803 1555.24 638.803C1542.2 638.803 1530.53 645.579 1520.23 659.131C1515.77 664.891 1511.99 671.667 1508.9 679.459V867.492L1539.79 875.115V882.738H1395.63V875.115ZM1784.61 992C1769.16 992 1757.15 987.934 1748.57 979.803C1739.99 971.672 1735.7 960.492 1735.7 946.262C1735.7 933.388 1739.13 923.393 1746 916.279C1753.2 909.164 1762.64 905.607 1774.31 905.607C1777.06 905.607 1779.8 905.776 1782.55 906.115C1785.3 906.792 1787.18 907.131 1788.21 907.131L1794.91 908.148V976.754C1804.86 975.06 1813.61 969.639 1821.16 960.492C1828.72 951.344 1837.13 935.59 1846.39 913.23L1856.69 887.82L1722.83 643.885L1697.08 636.262V628.639H1761.44C1779.29 628.639 1793.36 632.366 1803.66 639.82C1814.3 646.934 1823.4 657.607 1830.95 671.836L1895.3 789.23L1949.37 651.508L1910.75 636.262V628.639H2006V636.262L1964.81 651.508L1861.84 913.23C1850.86 941.011 1839.19 961 1826.83 973.197C1814.47 985.732 1800.4 992 1784.61 992Z"
              fill="#484539"
              fillOpacity="0.05"
            />
          </CSSTransition>
        </svg>
        <div className="homepage-content">
          <CSSTransition
            in={true}
            timeout={400}
            classNames="animate-left-delay"
            appear
          >
            <div className="text">
              <h4>CONTACT ME</h4>
              <h1>Find Me!</h1>
              <p>
                I’m so open for any critics and advise as it can help me <br />{" "}
                solve any obtacles that i didn’t even notice at the first <br />{" "}
                sight. So come on, find and reach me and share your <br />{" "}
                thought! see you👋
              </p>
            </div>
          </CSSTransition>
          <CSSTransition
            in={true}
            timeout={400}
            classNames="animate-right-delay"
            appear
          >
            <div className="contacts-list">
              <div className="contacts-link">
                <svg
                  viewBox="0 0 130 130"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M64.9919 0C29.1038 0 3.75089e-05 29.2175 3.75089e-05 65.26C-0.014625 78.9388 4.26984 92.2764 12.2479 103.388C20.226 114.499 31.4942 122.822 44.46 127.181C47.71 127.782 48.8963 125.767 48.8963 124.036C48.8963 122.484 48.8394 118.381 48.8069 112.938C30.7288 116.878 26.91 104.187 26.91 104.187C23.9607 96.6469 19.695 94.64 19.695 94.64C13.7882 90.5938 20.1338 90.675 20.1338 90.675C26.6582 91.1381 30.0869 97.4025 30.0869 97.4025C35.8882 107.372 45.305 104.496 49.01 102.822C49.595 98.605 51.2769 95.7288 53.1375 94.0956C38.7075 92.4463 23.53 86.8481 23.53 61.8475C23.53 54.7219 26.065 48.8962 30.225 44.33C29.5507 42.6806 27.3244 36.0425 30.8588 27.0644C30.8588 27.0644 36.3188 25.3094 48.7338 33.7512C54.0374 32.3018 59.5101 31.5641 65.0082 31.5575C70.5065 31.5684 75.979 32.3088 81.2825 33.7594C93.6894 25.3175 99.1413 27.0725 99.1413 27.0725C102.684 36.0588 100.458 42.6887 99.7913 44.3381C103.959 48.9044 106.47 54.73 106.47 61.8556C106.47 86.9212 91.2763 92.4381 76.7975 94.055C79.1294 96.07 81.2094 100.051 81.2094 106.137C81.2094 114.863 81.1282 121.899 81.1282 124.036C81.1282 125.783 82.2982 127.814 85.5969 127.173C98.5501 122.804 109.804 114.477 117.771 103.369C125.738 92.2601 130.016 78.9302 130 65.26C130 29.2175 100.896 0 64.9919 0Z"
                    fill="black"
                  />
                </svg>
                <a
                  href="https://github.com/aliefdany"
                  rel="noreferrer"
                  target="_blank"
                >
                  github.com/aliefdany
                  <div className="github-underline"></div>
                </a>
              </div>
              <div className="contacts-link">
                <svg
                  viewBox="0 0 130 130"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M102.275 0H27.7252C12.413 0 0 12.413 0 27.7252V102.275C0 117.587 12.413 130 27.7252 130H102.275C117.587 130 130 117.587 130 102.275V27.7252C130 12.413 117.587 0 102.275 0Z"
                    fill="#0A93E2"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M104.543 45.2744C101.742 46.5157 98.727 47.3577 95.5688 47.7335C98.7956 45.7976 101.27 42.7368 102.443 39.0889C99.4221 40.8766 96.0755 42.179 92.518 42.8797C89.6674 39.8409 85.6044 37.9454 81.1087 37.9454C72.4756 37.9454 65.4832 44.9452 65.4832 53.5709C65.4832 54.7945 65.6186 55.9908 65.8866 57.1342C52.9007 56.4801 41.3835 50.2595 33.6783 40.8022C32.3296 43.1127 31.562 45.7976 31.562 48.6601C31.562 54.0838 34.3209 58.869 38.5094 61.6692C35.9483 61.589 33.5416 60.8837 31.4307 59.711C31.4307 59.7795 31.4307 59.8423 31.4307 59.9109C31.4307 67.4789 36.8192 73.7954 43.9665 75.2303C42.6583 75.5888 41.2758 75.7824 39.8523 75.7824C38.846 75.7824 37.8669 75.6849 36.9097 75.5028C38.9026 81.7115 44.6731 86.2291 51.5127 86.3543C46.1634 90.5481 39.4257 93.0407 32.1022 93.0407C30.8378 93.0407 29.5923 92.9726 28.3745 92.8251C35.2885 97.2581 43.5004 99.8468 52.3256 99.8468C81.0695 99.8468 96.7926 76.0315 96.7926 55.3816C96.7926 54.7044 96.7752 54.0325 96.7475 53.361C99.8021 51.1584 102.449 48.4048 104.543 45.2743L104.543 45.2744Z"
                    fill="white"
                  />
                </svg>
                <a
                  href="https://twitter.com/aliefseventri"
                  rel="noreferrer"
                  target="_blank"
                >
                  twitter.com/aliefseventri
                  <div className="twt-underline"></div>
                </a>
              </div>
              <div className="contacts-link">
                <svg
                  viewBox="0 0 129 132"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0)">
                    <path
                      d="M32.7116 131.114C27.722 131.058 22.7793 130.124 18.1005 128.355C14.6838 127.067 11.5926 125.016 9.05276 122.353C6.43453 119.767 4.42101 116.613 3.16176 113.125C1.42881 108.353 0.514966 103.312 0.460353 98.2232C0.077147 89.7634 0 87.2259 0 65.79C0 44.3541 0.0847353 41.8257 0.456559 33.3594C0.517799 28.2726 1.43276 23.2342 3.16176 18.4625C4.42714 14.9769 6.43781 11.8226 9.04771 9.22866C11.5844 6.56046 14.677 4.50858 18.0967 3.225C22.7755 1.45592 27.7182 0.522487 32.7078 0.46569C41.0043 0.07869 43.4958 0 64.5 0C85.5042 0 87.9944 0.08643 96.2947 0.46569C101.283 0.527714 106.224 1.46098 110.903 3.225C114.321 4.51027 117.413 6.56144 119.951 9.22737C122.565 11.8167 124.577 14.9712 125.838 18.4586C127.573 23.2309 128.489 28.2725 128.545 33.362C128.924 41.8282 129.001 44.3631 129.001 65.7926C129.001 87.2221 128.924 89.7569 128.545 98.2232C128.484 103.312 127.569 108.352 125.838 113.125C124.529 116.587 122.524 119.73 119.951 122.353C117.379 124.976 114.297 127.02 110.903 128.355C106.225 130.124 101.282 131.058 96.2922 131.116C87.9995 131.503 85.5068 131.581 64.4975 131.581C43.4882 131.581 41.003 131.506 32.7104 131.116"
                      fill="url(#paint0_radial)"
                    />
                    <path
                      d="M32.7116 131.114C27.722 131.058 22.7793 130.124 18.1005 128.355C14.6838 127.067 11.5926 125.016 9.05276 122.353C6.43453 119.767 4.42101 116.613 3.16176 113.125C1.42881 108.353 0.514966 103.312 0.460353 98.2232C0.077147 89.7634 0 87.2259 0 65.79C0 44.3541 0.0847353 41.8257 0.456559 33.3594C0.517799 28.2726 1.43276 23.2342 3.16176 18.4625C4.42714 14.9769 6.43781 11.8226 9.04771 9.22866C11.5844 6.56046 14.677 4.50858 18.0967 3.225C22.7755 1.45592 27.7182 0.522487 32.7078 0.46569C41.0043 0.07869 43.4958 0 64.5 0C85.5042 0 87.9944 0.08643 96.2947 0.46569C101.283 0.527714 106.224 1.46098 110.903 3.225C114.321 4.51027 117.413 6.56144 119.951 9.22737C122.565 11.8167 124.577 14.9712 125.838 18.4586C127.573 23.2309 128.489 28.2725 128.545 33.362C128.924 41.8282 129.001 44.3631 129.001 65.7926C129.001 87.2221 128.924 89.7569 128.545 98.2232C128.484 103.312 127.569 108.352 125.838 113.125C124.529 116.587 122.524 119.73 119.951 122.353C117.379 124.976 114.297 127.02 110.903 128.355C106.225 130.124 101.282 131.058 96.2922 131.116C87.9995 131.503 85.5068 131.581 64.4975 131.581C43.4882 131.581 41.003 131.506 32.7104 131.116"
                      fill="url(#paint1_radial)"
                    />
                    <path
                      d="M48.662 66.0699C48.6622 62.8472 49.5994 59.697 51.355 57.0176C53.1105 54.3382 55.6056 52.2499 58.5247 51.0169C61.4439 49.7839 64.6559 49.4616 67.7547 50.0907C70.8534 50.7197 73.6996 52.2719 75.9335 54.551C78.1673 56.8301 79.6884 59.7336 80.3044 62.8945C80.9204 66.0554 80.6036 69.3315 79.3941 72.3088C78.1846 75.286 76.1367 77.8305 73.5094 79.6205C70.8821 81.4106 67.7935 82.3657 64.634 82.3652C60.3975 82.3646 56.3347 80.6474 53.3394 77.5914C50.3442 74.5355 48.6617 70.3911 48.662 66.0699V66.0699ZM40.0253 66.0699C40.0253 71.0344 41.4686 75.8874 44.1726 80.0152C46.8766 84.143 50.72 87.3603 55.2166 89.2601C59.7133 91.1599 64.6612 91.657 69.4348 90.6885C74.2084 89.72 78.5933 87.3293 82.0349 83.8189C85.4765 80.3085 87.8202 75.836 88.7697 70.9669C89.7193 66.0978 89.2319 61.0508 87.3694 56.4643C85.5068 51.8777 82.3526 47.9575 78.3058 45.1994C74.2589 42.4412 69.5011 40.9691 64.634 40.9691C61.4023 40.9689 58.2022 41.6181 55.2164 42.8795C52.2307 44.1408 49.5178 45.9897 47.2326 48.3206C44.9475 50.6514 43.1348 53.4186 41.8982 56.4641C40.6616 59.5095 40.0251 62.7736 40.0253 66.0699V66.0699ZM84.4658 39.9745C84.4653 41.1346 84.8021 42.2688 85.4336 43.2337C86.065 44.1986 86.9628 44.9508 88.0134 45.3952C89.064 45.8397 90.2202 45.9564 91.3358 45.7305C92.4514 45.5047 93.4763 44.9465 94.2809 44.1265C95.0855 43.3066 95.6336 42.2617 95.856 41.124C96.0784 39.9863 95.965 38.8068 95.5302 37.7348C95.0955 36.6628 94.3588 35.7464 93.4134 35.1015C92.468 34.4565 91.3563 34.112 90.2189 34.1115V34.1115C88.6944 34.1122 87.2325 34.73 86.1543 35.8293C85.076 36.9286 84.4697 38.4195 84.4683 39.9745H84.4658ZM45.2751 105.86C42.2362 105.826 39.2256 105.259 36.3753 104.183C34.3083 103.37 32.4309 102.125 30.8642 100.528C29.2974 98.9303 28.0759 97.016 27.2783 94.9079C26.2233 92.0007 25.6671 88.9299 25.6342 85.8301C25.4015 80.6779 25.356 79.1299 25.356 66.0764C25.356 53.0229 25.4066 51.4788 25.6342 46.3213C25.6711 43.222 26.2271 40.1518 27.2783 37.2436C28.075 35.1345 29.2961 33.2192 30.863 31.621C32.4298 30.0228 34.3076 28.7772 36.3753 27.9646C39.2255 26.8885 42.2361 26.3212 45.2751 26.2876C50.3263 26.0503 51.844 26.0038 64.6365 26.0038C77.429 26.0038 78.9479 26.0542 84.0042 26.2889C87.0428 26.3265 90.0527 26.8937 92.9039 27.9659C94.9716 28.7786 96.8494 30.0242 98.4162 31.6223C99.983 33.2205 101.204 35.1359 102.001 37.2449C103.056 40.1521 103.612 43.2229 103.645 46.3226C103.878 51.4826 103.923 53.0229 103.923 66.0777C103.923 79.1325 103.876 80.6753 103.645 85.8327C103.61 88.9323 103.054 92.0026 102.001 94.9105C101.203 97.0185 99.9819 98.9329 98.4151 100.53C96.8483 102.128 94.971 103.373 92.9039 104.186C90.0538 105.262 87.0431 105.829 84.0042 105.863C78.9529 106.1 77.4353 106.146 64.6365 106.146C51.8376 106.146 50.3251 106.099 45.2751 105.863V105.86ZM44.878 17.486C40.9015 17.5657 36.9672 18.3334 33.2427 19.7563C30.0588 21.012 27.1673 22.9324 24.7535 25.3945C22.3397 27.8565 20.457 30.8059 19.2259 34.0534C17.8311 37.8525 17.0784 41.8655 17.0001 45.9214C16.7636 51.133 16.7104 52.7997 16.7104 66.0751C16.7104 79.3505 16.7648 81.0159 17.0001 86.2288C17.0784 90.2847 17.831 94.2977 19.2259 98.0968C20.457 101.344 22.3398 104.294 24.7536 106.756C27.1673 109.218 30.0588 111.138 33.2427 112.394C36.9674 113.816 40.9016 114.584 44.878 114.664C49.9899 114.902 51.6214 114.96 64.6365 114.96C77.6515 114.96 79.2843 114.904 84.395 114.664C88.3714 114.584 92.3056 113.816 96.0302 112.394C99.2141 111.138 102.106 109.218 104.519 106.756C106.933 104.294 108.816 101.344 110.047 98.0968C111.444 94.2982 112.196 90.2849 112.273 86.2288C112.506 81.0133 112.559 79.3505 112.559 66.0751C112.559 52.7997 112.504 51.1343 112.273 45.9214C112.195 41.8655 111.442 37.8524 110.047 34.0534C108.816 30.8065 106.934 27.8576 104.521 25.3956C102.108 22.9336 99.217 21.0129 96.0341 19.7563C92.3098 18.3325 88.3753 17.5648 84.3988 17.486C79.2881 17.2473 77.6553 17.1906 64.6428 17.1906C51.6302 17.1906 49.9937 17.246 44.8805 17.486"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <radialGradient
                      id="paint0_radial"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(8.34832 128.698) scale(163.782 167.058)"
                    >
                      <stop offset="0.09" stopColor="#FA8F21" />
                      <stop offset="0.78" stopColor="#D82D7E" />
                    </radialGradient>
                    <radialGradient
                      id="paint1_radial"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(89.354 124.472) scale(144.13 147.012)"
                    >
                      <stop offset="0.64" stopColor="#8C3AAA" stopOpacity="0" />
                      <stop offset="1" stopColor="#8C3AAA" />
                    </radialGradient>
                    <clipPath id="clip0">
                      <rect width="129" height="131.58" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <a
                  href="https://instagram.com/aliefseventri"
                  rel="noreferrer"
                  target="_blank"
                >
                  instagram.com/aliefseventri
                  <div className="cp-underline"></div>
                </a>
              </div>
            </div>
          </CSSTransition>
        </div>
      </div>
    </Fragment>
  );
};

export default Contacts;
