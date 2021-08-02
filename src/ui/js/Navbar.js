import { Link } from "react-router-dom";
import { Fragment, useEffect } from "react";

const Navbar = ({ showNav, toggleActive }) => {
  function handleNavbar() {
    const elem = document.querySelector(".navbar");
    if (showNav) {
      elem.classList.add("show-navbar");
    } else {
      elem.classList.remove("show-navbar");
    }
  }

  useEffect(() => {
    handleNavbar();
  }, [showNav]);

  function handleActive(state) {
    toggleActive(state);
  }

  return (
    <Fragment>
      <nav className="navbar">
        <Link
          to="/"
          onClick={() => {
            handleActive("intro");
          }}
        >
          <svg
            className="logo"
            viewBox="0 0 487 87"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M99.061 52.7492L105.555 27.9051H111.415L117.909 52.7492H113.361L111.981 47.1152H105.012L103.654 52.7492H99.061ZM111.076 43.4044L108.496 32.7698L105.917 43.4044H111.076ZM124.493 52.7492H120.375V27.4073H124.493V52.7492ZM132.413 52.7492H128.295V35.9602H132.413V52.7492ZM128.114 28.5839H132.616V33.0413H128.114V28.5839ZM150.673 43.9474V45.8707H139.586C139.736 48.601 140.988 49.9661 143.342 49.9661C144.397 49.9661 145.235 49.7097 145.853 49.1968C146.472 48.6689 146.781 48.058 146.781 47.3641H150.673V47.4998C150.673 49.0837 150.024 50.4187 148.727 51.5048C147.429 52.6059 145.627 53.1565 143.319 53.1565C140.724 53.1565 138.763 52.3872 137.436 50.8486C136.124 49.31 135.467 47.2811 135.467 44.762V43.9474C135.467 41.4283 136.124 39.3995 137.436 37.8608C138.733 36.3222 140.641 35.5529 143.161 35.5529C145.634 35.5529 147.505 36.3222 148.772 37.8608C150.039 39.3995 150.673 41.4283 150.673 43.9474ZM143.07 38.7433C140.913 38.7433 139.751 40.1084 139.586 42.8387H146.509C146.389 40.1084 145.242 38.7433 143.07 38.7433ZM159.248 33.3355V35.9602H163.276V39.5805H159.248V52.7492H155.13V39.5805H152.573V35.9602H155.13V32.8603C155.13 28.9534 157.084 27 160.99 27C162.182 27 163.049 27.1358 163.593 27.4073V30.8239C163.261 30.658 162.725 30.575 161.986 30.575C161.051 30.575 160.364 30.7711 159.927 31.1633C159.474 31.5555 159.248 32.2796 159.248 33.3355ZM190.224 39.7615V41.0286C190.224 45.2372 189.417 48.239 187.803 50.034C186.189 51.8442 183.617 52.7492 180.087 52.7492H172.802V28.0408H180.087C183.617 28.0408 186.189 28.9459 187.803 30.756C189.417 32.5511 190.224 35.5529 190.224 39.7615ZM177.055 31.7516V49.0384H179.839C182.011 49.0384 183.564 48.4124 184.5 47.1604C185.435 45.9084 185.902 43.8645 185.902 41.0286V39.7615C185.902 36.9256 185.435 34.8816 184.5 33.6296C183.564 32.3776 182.011 31.7516 179.839 31.7516H177.055ZM207.217 52.7492H203.574L203.257 50.826C201.9 52.3797 200.074 53.1565 197.782 53.1565C196.092 53.1565 194.825 52.6964 193.98 51.7763C193.135 50.841 192.713 49.6569 192.713 48.2239V47.9071C192.713 46.2176 193.226 44.9883 194.252 44.219C195.262 43.4496 196.703 42.9217 198.573 42.6351L202.85 41.9789V41.911C202.85 40.8099 202.639 40.0104 202.216 39.5126C201.809 38.9997 201.085 38.7433 200.044 38.7433C198.189 38.7433 197.261 39.6634 197.261 41.5037H193.347V41.2096C193.347 39.5956 193.867 38.2455 194.908 37.1594C195.949 36.0884 197.699 35.5529 200.157 35.5529C202.646 35.5529 204.404 36.0884 205.429 37.1594C206.455 38.2455 206.968 39.8294 206.968 41.911V47.9976L207.217 52.7492ZM199.207 49.7625C200.761 49.7625 201.975 49.1817 202.85 48.0202V44.4905L199.32 45.0561C197.661 45.3277 196.831 46.1271 196.831 47.4546V47.7035C196.831 48.2767 197.027 48.7669 197.419 49.1742C197.827 49.5664 198.423 49.7625 199.207 49.7625ZM224.866 41.2548V52.7492H220.77V41.911C220.77 41.0663 220.552 40.395 220.114 39.8972C219.662 39.3844 218.99 39.1279 218.1 39.1279C216.562 39.1279 215.4 39.769 214.616 41.0512V52.7492H210.498V40.7118L210.226 35.9602H213.869L214.254 38.1776C215.445 36.4278 217.256 35.5529 219.684 35.5529C221.419 35.5529 222.716 36.0884 223.576 37.1594C224.436 38.2455 224.866 39.6106 224.866 41.2548ZM231.314 35.9602L235.003 47.613L238.691 35.9602H243.126L237.22 51.9347L235.003 59.0847H230.115L232.785 51.9347L226.857 35.9602H231.314ZM245.66 37.7251L245.004 28.0408H249.506L248.827 37.7251H245.66ZM259.553 49.9661C260.503 49.9661 261.219 49.7776 261.702 49.4005C262.185 49.0083 262.426 48.4954 262.426 47.8619C262.426 47.1529 262.192 46.6476 261.725 46.3459C261.257 46.0291 260.427 45.8179 259.236 45.7123C256.913 45.5313 255.253 45.0863 254.258 44.3773C253.262 43.6684 252.764 42.5747 252.764 41.0965V40.8476C252.764 39.1128 253.383 37.793 254.62 36.8879C255.857 35.9979 257.501 35.5529 259.553 35.5529C264.093 35.5529 266.363 37.4611 266.363 41.2775V41.4359H262.336C262.336 39.6408 261.408 38.7433 259.553 38.7433C258.678 38.7433 258.006 38.9243 257.539 39.2863C257.056 39.6483 256.815 40.1311 256.815 40.7344C256.815 41.3981 257.033 41.8809 257.471 42.1825C257.908 42.4842 258.715 42.6803 259.892 42.7708C262.17 42.9669 263.852 43.3968 264.938 44.0606C266.009 44.7394 266.544 45.8858 266.544 47.4998V47.7035C266.544 49.3929 265.948 50.7279 264.757 51.7084C263.565 52.6738 261.83 53.1565 259.553 53.1565C257.245 53.1565 255.502 52.6436 254.326 51.6179C253.134 50.5771 252.538 49.2421 252.538 47.613V47.4998H256.634C256.634 49.144 257.607 49.9661 259.553 49.9661ZM298.403 52.885H292.904L288.854 32.8603L284.759 52.885H279.283L275.029 28.0408H279.464L282.292 47.1831L286.162 28.0408H291.501L295.393 47.1831L298.222 28.0408H302.656L298.403 52.885ZM319.83 43.9474V45.8707H308.743C308.894 48.601 310.146 49.9661 312.499 49.9661C313.555 49.9661 314.392 49.7097 315.011 49.1968C315.629 48.6689 315.938 48.058 315.938 47.3641H319.83V47.4998C319.83 49.0837 319.182 50.4187 317.884 51.5048C316.587 52.6059 314.784 53.1565 312.476 53.1565C309.882 53.1565 307.921 52.3872 306.594 50.8486C305.281 49.31 304.625 47.2811 304.625 44.762V43.9474C304.625 41.4283 305.281 39.3995 306.594 37.8608C307.891 36.3222 309.799 35.5529 312.318 35.5529C314.792 35.5529 316.662 36.3222 317.93 37.8608C319.197 39.3995 319.83 41.4283 319.83 43.9474ZM312.228 38.7433C310.07 38.7433 308.909 40.1084 308.743 42.8387H315.667C315.546 40.1084 314.4 38.7433 312.228 38.7433ZM322.794 27.4073H326.912V37.5214C328.014 36.2091 329.507 35.5529 331.392 35.5529C335.571 35.5529 337.66 38.3209 337.66 43.8569V44.8525C337.66 47.4169 337.155 49.4457 336.144 50.9391C335.148 52.4174 333.565 53.1565 331.392 53.1565C329.235 53.1565 327.621 52.3269 326.55 50.6676L326.188 52.7492H322.545L322.794 47.9976V27.4073ZM326.912 41.0512V47.6582C327.727 48.9253 328.828 49.5589 330.216 49.5589C332.433 49.5589 333.542 47.9901 333.542 44.8525V43.8569C333.542 40.7043 332.433 39.1279 330.216 39.1279C328.843 39.1279 327.742 39.769 326.912 41.0512ZM354.834 43.5401H351.349V52.7492H347.095V28.0408H354.834C360.34 28.0408 363.092 30.5147 363.092 35.4624V36.096C363.092 41.0587 360.34 43.5401 354.834 43.5401ZM351.349 31.7516V39.8294H354.992C357.526 39.8294 358.793 38.5396 358.793 35.9602V35.6208C358.793 33.0413 357.526 31.7516 354.992 31.7516H351.349ZM378.547 50.8938C377.279 52.4023 375.379 53.1565 372.845 53.1565C370.31 53.1565 368.41 52.4023 367.143 50.8938C365.876 49.3854 365.242 47.3716 365.242 44.8525V43.8569C365.242 41.3227 365.876 39.3014 367.143 37.793C368.41 36.2996 370.31 35.5529 372.845 35.5529C375.379 35.5529 377.279 36.2996 378.547 37.793C379.814 39.3014 380.447 41.3227 380.447 43.8569V44.8525C380.447 47.3716 379.814 49.3854 378.547 50.8938ZM369.36 44.8525C369.36 47.9901 370.522 49.5589 372.845 49.5589C375.168 49.5589 376.329 47.9901 376.329 44.8525V43.8569C376.329 40.7043 375.168 39.1279 372.845 39.1279C370.522 39.1279 369.36 40.7043 369.36 43.8569V44.8525ZM391.693 35.5529C391.768 35.5529 391.859 35.5605 391.964 35.5755C392.085 35.5755 392.153 35.5755 392.168 35.5755V39.5805H391.489C389.664 39.5805 388.359 40.1688 387.575 41.3454V52.7492H383.457V40.7118L383.185 35.9602H386.828L387.167 37.9966C388.284 36.3675 389.792 35.5529 391.693 35.5529ZM400.698 31.2086V35.9602H405.359V39.5805H400.698V46.821C400.698 47.8769 400.917 48.5935 401.354 48.9706C401.807 49.3628 402.493 49.5589 403.413 49.5589C404.198 49.5589 404.741 49.4834 405.042 49.3326V52.7492C404.484 53.0208 403.617 53.1565 402.44 53.1565C398.534 53.1565 396.58 51.1955 396.58 47.2736V39.5805H394.023V35.9602H396.58V31.2086H400.698ZM421.062 50.8938C419.795 52.4023 417.894 53.1565 415.36 53.1565C412.826 53.1565 410.925 52.4023 409.658 50.8938C408.391 49.3854 407.758 47.3716 407.758 44.8525V43.8569C407.758 41.3227 408.391 39.3014 409.658 37.793C410.925 36.2996 412.826 35.5529 415.36 35.5529C417.894 35.5529 419.795 36.2996 421.062 37.793C422.329 39.3014 422.963 41.3227 422.963 43.8569V44.8525C422.963 47.3716 422.329 49.3854 421.062 50.8938ZM411.876 44.8525C411.876 47.9901 413.037 49.5589 415.36 49.5589C417.683 49.5589 418.845 47.9901 418.845 44.8525V43.8569C418.845 40.7043 417.683 39.1279 415.36 39.1279C413.037 39.1279 411.876 40.7043 411.876 43.8569V44.8525ZM431.561 33.3355V35.9602H435.566V39.5805H431.561V52.7492H427.443V39.5805H424.864V35.9602H427.443V32.8603C427.443 28.9534 429.396 27 433.303 27C434.48 27 435.34 27.1358 435.883 27.4073V30.8239C435.551 30.658 435.015 30.575 434.276 30.575C433.341 30.575 432.655 30.7711 432.217 31.1633C431.78 31.5555 431.561 32.2796 431.561 33.3355ZM451.292 50.8938C450.024 52.4023 448.124 53.1565 445.59 53.1565C443.055 53.1565 441.155 52.4023 439.888 50.8938C438.621 49.3854 437.987 47.3716 437.987 44.8525V43.8569C437.987 41.3227 438.621 39.3014 439.888 37.793C441.155 36.2996 443.055 35.5529 445.59 35.5529C448.124 35.5529 450.024 36.2996 451.292 37.793C452.559 39.3014 453.192 41.3227 453.192 43.8569V44.8525C453.192 47.3716 452.559 49.3854 451.292 50.8938ZM442.105 44.8525C442.105 47.9901 443.267 49.5589 445.59 49.5589C447.913 49.5589 449.074 47.9901 449.074 44.8525V43.8569C449.074 40.7043 447.913 39.1279 445.59 39.1279C443.267 39.1279 442.105 40.7043 442.105 43.8569V44.8525ZM460.388 52.7492H456.269V27.4073H460.388V52.7492ZM468.307 52.7492H464.189V35.9602H468.307V52.7492ZM463.985 28.5839H468.488V33.0413H463.985V28.5839ZM484.643 50.8938C483.376 52.4023 481.476 53.1565 478.941 53.1565C476.407 53.1565 474.507 52.4023 473.239 50.8938C471.972 49.3854 471.339 47.3716 471.339 44.8525V43.8569C471.339 41.3227 471.972 39.3014 473.239 37.793C474.507 36.2996 476.407 35.5529 478.941 35.5529C481.476 35.5529 483.376 36.2996 484.643 37.793C485.91 39.3014 486.544 41.3227 486.544 43.8569V44.8525C486.544 47.3716 485.91 49.3854 484.643 50.8938ZM475.457 44.8525C475.457 47.9901 476.618 49.5589 478.941 49.5589C481.264 49.5589 482.426 47.9901 482.426 44.8525V43.8569C482.426 40.7043 481.264 39.1279 478.941 39.1279C476.618 39.1279 475.457 40.7043 475.457 43.8569V44.8525Z"
              fill="#DFDACA"
            />
            <path
              d="M85.6688 49.7149L81.2107 48.8924C75.5441 45.1654 70.69 38.067 67.4505 28.8055L77.9306 21.5953C78.2659 21.3664 78.4965 21.0136 78.5718 20.6147C78.647 20.2157 78.5606 19.8032 78.3317 19.4678C78.1028 19.1325 77.75 18.9019 77.351 18.8267C76.9521 18.7514 76.5395 18.8378 76.2042 19.0667L65.5819 26.3886C61.992 24.2417 58.9072 21.346 56.5378 17.8988C54.1685 14.4517 52.5703 10.5342 51.8522 6.4134L52.7154 1.80296C52.752 1.60626 52.7496 1.40425 52.7082 1.20849C52.6668 1.01272 52.5873 0.827026 52.4741 0.662002C52.3609 0.496979 52.2164 0.355859 52.0487 0.246701C51.881 0.137543 51.6934 0.0624848 51.4967 0.025811C51.3 -0.0108628 51.098 -0.00843375 50.9023 0.0329598C50.7065 0.0743533 50.5208 0.153901 50.3558 0.26706C50.1908 0.380219 50.0496 0.524774 49.9405 0.692471C49.8313 0.860168 49.7563 1.04772 49.7196 1.24443L48.9173 5.56037C45.2107 11.3488 38.2747 16.1217 28.8305 19.4221L22.4835 10.1911C22.2492 9.85445 21.8907 9.62465 21.487 9.55229C21.0832 9.47992 20.6673 9.5709 20.3306 9.80521C19.9939 10.0395 19.7641 10.398 19.6918 10.8017C19.6194 11.2055 19.7104 11.6214 19.9447 11.9581L26.3831 21.3211C24.234 24.9103 21.3362 27.9939 17.8873 30.3615C14.4384 32.7291 10.5195 34.3252 6.39774 35.0408L1.82793 34.1877C1.62789 34.151 1.42258 34.1541 1.22374 34.1968C1.02489 34.2395 0.836396 34.3209 0.669015 34.4364C0.501634 34.5519 0.358644 34.6993 0.24821 34.8701C0.137777 35.0408 0.0620615 35.2317 0.0253877 35.4317C-0.0112861 35.6318 -0.00819985 35.8371 0.0344695 36.0359C0.0771389 36.2348 0.158556 36.4233 0.274072 36.5906C0.507369 36.9287 0.865396 37.1602 1.26939 37.2343L5.90014 38.0873C11.5159 41.7939 16.1975 48.7096 19.4979 58.1437L9.21072 65.2523C9.03898 65.3626 8.89117 65.5063 8.77606 65.6749C8.66095 65.8435 8.58089 66.0334 8.54064 66.2335C8.50039 66.4337 8.50077 66.6398 8.54175 66.8398C8.58273 67.0397 8.66349 67.2294 8.77921 67.3975C8.89493 67.5657 9.04327 67.7089 9.21541 67.8186C9.38754 67.9282 9.57997 68.0022 9.78126 68.0361C9.98254 68.07 10.1886 68.063 10.3871 68.0157C10.5857 67.9684 10.7727 67.8816 10.9371 67.7606L21.3258 60.5099C24.9253 62.6637 28.0167 65.5702 30.3883 69.0302C32.7598 72.4902 34.3554 76.422 35.0657 80.5561L34.2431 84.9838C34.2064 85.1805 34.2088 85.3825 34.2502 85.5783C34.2915 85.7741 34.3711 85.9598 34.4843 86.1248C34.5974 86.2898 34.742 86.431 34.9097 86.5401C35.0774 86.6493 35.265 86.7243 35.4618 86.7609H35.7461C36.1016 86.7596 36.4454 86.634 36.718 86.4059C36.9907 86.1778 37.1749 85.8615 37.2389 85.5118L38.0818 81.0131C41.8087 75.3973 48.897 70.5736 58.1585 67.3341L65.3382 77.7634C65.5805 78.0598 65.9254 78.254 66.3044 78.3076C66.6834 78.3611 67.0686 78.2701 67.3835 78.0525C67.6984 77.8349 67.9198 77.5067 68.0037 77.1332C68.0877 76.7598 68.0279 76.3685 67.8364 76.0371L60.5653 65.4453C62.7407 61.8764 65.6588 58.8176 69.1212 56.4766C72.5837 54.1355 76.5095 52.5672 80.6319 51.878L85.1103 52.7107H85.3946C85.7986 52.7471 86.2005 52.6214 86.5119 52.3615C86.8233 52.1015 87.0186 51.7285 87.055 51.3245C87.0913 50.9205 86.9657 50.5186 86.7058 50.2073C86.4458 49.8959 86.0728 49.7005 85.6688 49.6642V49.7149ZM50.5726 13.0853C52.9699 19.28 57.227 24.5801 62.7588 28.2571L54.2386 34.1166C50.268 32.0044 48.3385 29.0391 48.4197 25.0989C48.4353 24.9741 48.4353 24.8479 48.4197 24.7231L50.5726 13.0853ZM39.5543 44.2718L33.4612 48.4963C32.8114 46.3155 31.7228 44.2905 30.2623 42.5454L39.5543 44.2718ZM31.7044 39.7223C33.4702 38.6071 34.9543 37.0987 36.0406 35.3149L40.1027 41.2455L31.7044 39.7223ZM41.3111 46.7598L39.7472 55.219C38.6351 53.4453 37.1264 51.954 35.3399 50.8625L41.3111 46.7598ZM38.3864 33.4159C40.5693 32.7737 42.5979 31.692 44.3475 30.2374L42.6211 39.5598L38.3864 33.4159ZM44.3171 47.2168L48.5416 53.3099C46.3616 53.9567 44.3366 55.0417 42.5907 56.4986L44.3171 47.2168ZM46.9371 45.6529L55.0612 47.1558C53.3847 48.2573 51.9703 49.7133 50.9179 51.421L46.9371 45.6529ZM45.6068 40.1183L47.1605 31.72C48.2839 33.4807 49.7993 34.9579 51.5881 36.036L45.6068 40.1183ZM47.3331 42.6266L53.4262 38.4021C54.0895 40.5826 55.1919 42.6043 56.6657 44.3429L47.3331 42.6266ZM47.7495 11.7956L45.4443 24.3372C44.4869 25.9608 43.2042 27.3689 41.6769 28.4734C40.1495 29.5778 38.4104 30.3547 36.5687 30.7553L30.5873 22.0625C37.7974 19.4323 43.6163 15.9491 47.7596 11.7855L47.7495 11.7956ZM28.2313 24.0427L34.0908 32.5527C31.9786 36.5234 29.0132 38.4326 25.0731 38.3716C24.9416 38.354 24.8084 38.354 24.677 38.3716L13.1204 36.3305C19.3272 33.9305 24.6162 29.6296 28.2313 24.0427ZM11.9831 39.1637L24.3419 41.408C25.9658 42.365 27.3743 43.6474 28.4788 45.1749C29.5833 46.7023 30.3599 48.4416 30.7599 50.2836L22.0671 56.265C19.4573 49.1158 16.0451 43.307 11.9831 39.1637ZM36.3046 73.9045C33.8993 67.6776 29.6154 62.3538 24.0474 58.6718L32.5676 52.8123C36.5382 54.9245 38.4677 57.8898 38.3864 61.83C38.3842 61.9812 38.4047 62.1318 38.4474 62.2769L36.3046 73.9045ZM39.209 74.92L41.5142 62.4292C42.4712 60.8052 43.7537 59.3968 45.2811 58.2923C46.8085 57.1878 48.5478 56.4111 50.3898 56.0111L56.3712 64.7039C49.1915 67.3138 43.3726 70.7665 39.209 74.92ZM58.6967 62.7338L52.8372 54.2035C54.8682 50.3039 57.7929 48.3846 61.6316 48.3846H61.7433L73.9295 50.6391C67.7176 52.9883 62.3928 57.2161 58.6967 62.7338ZM62.5658 45.4701C60.9419 44.5131 59.5334 43.2307 58.4289 41.7032C57.3244 40.1758 56.5478 38.4365 56.1478 36.5945L64.8406 30.6131C67.4505 37.7928 70.9337 43.6117 75.0567 47.7753L62.5658 45.4701Z"
              fill="#DFDACA"
            />
          </svg>
        </Link>

        <ul className="main-menu">
          <li>
            <Link
              to="/"
              onClick={() => {
                handleActive("intro");
              }}
            >
              Home
              <div className="navbar-underline"></div>
            </Link>
          </li>
          <li>
            <Link>
              Blog
              <div className="coming-soon">Coming Soon</div>
              {/* <div className="navbar-underline"></div> */}
            </Link>
          </li>
          <li>
            <Link
              to="/project"
              onClick={() => {
                handleActive("project");
              }}
            >
              Projects
              <div className="navbar-underline"></div>
            </Link>
          </li>
          <li>
            <Link
              to="/contacts"
              onClick={() => {
                handleActive("contacts");
              }}
            >
              Contacts
              <div className="navbar-underline"></div>
            </Link>
          </li>
        </ul>
        <svg
          className="diagonal-bg"
          viewBox="0 0 1920 116"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d)">
            <path d="M0 23H1920V99L0 23Z" fill="#353229" />
          </g>
          <g filter="url(#filter1_d)">
            <path d="M0 23H1920V36H0V23Z" fill="#545142" />
          </g>
          <defs>
            <filter
              id="filter0_d"
              x="-15"
              y="10"
              width="1950"
              height="106"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="7.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow"
                result="shape"
              />
            </filter>
            <filter
              id="filter1_d"
              x="-25"
              y="0"
              width="1970"
              height="63"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="12.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.0823529 0 0 0 0 0.0705882 0 0 0 0 0 0 0 0 0.5 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </nav>
    </Fragment>
  );
};

export default Navbar;
