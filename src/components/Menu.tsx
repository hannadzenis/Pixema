import { Link } from 'react-router-dom';
import './styles/menu.css'
import './styles/header.css'
import { Filter } from './Filter';
import { useState } from 'react';


export const Menu = () => {
    return (
        <div className='menu'>
            <div className='logo'>
                <svg xmlns="http://www.w3.org/2000/svg" width="158" height="40" viewBox="0 0 412 104" fill="none">
                    <path d="M14.3706 25.1631L15.6879 33.4739C18.1628 30.6267 21.5559 28.2797 25.8671 26.4329C30.2581 24.586 34.689 23.6626 39.1599 23.6626C52.7321 23.6626 59.5182 33.8202 59.5182 54.1354C59.5182 65.0625 57.682 72.7192 54.0095 77.1054C50.4168 81.4147 44.7484 83.5694 37.0043 83.5694C29.0206 83.5694 22.4341 81.7225 17.2447 78.0289C17.6439 81.9534 17.7636 86.0318 17.604 90.2642V104H0V25.1631H14.3706ZM17.604 42.4772V68.5638C23.8312 70.1029 28.3021 70.8724 31.0165 70.8724C34.9285 70.8724 37.6031 69.795 39.0401 67.6404C40.557 65.4858 41.3155 60.9841 41.3155 54.1354C41.3155 47.4406 40.6368 42.939 39.2796 40.6304C37.9224 38.2449 35.5273 37.0522 32.0943 37.0522C28.1823 37.0522 23.3522 38.8605 17.604 42.4772Z" fill="#7B61FF"/>
                    <path d="M79.7682 0H87.672C91.105 0 92.8215 1.65446 92.8215 4.96337V11.1964C92.8215 14.5054 91.105 16.1598 87.672 16.1598H79.7682C76.3352 16.1598 74.6187 14.5054 74.6187 11.1964V4.96337C74.6187 1.65446 76.3352 0 79.7682 0ZM92.582 82.0688H74.978V25.1631H92.582V82.0688Z" fill="#7B61FF"/>
                    <path d="M137.113 58.1754H136.395L122.383 82.0688H104.181L122.383 52.8657L105.498 25.1631H123.581L136.155 47.0943H137.353L149.927 25.1631H168.01L151.125 52.8657L169.327 82.0688H151.125L137.113 58.1754Z" fill="#7B61FF"/>
                    <path d="M218.18 59.3296H196.864C197.422 63.485 198.7 66.2937 200.696 67.7558C202.772 69.141 206.165 69.8335 210.875 69.8335C217.182 69.8335 224.527 69.4103 232.91 68.5638L234.586 79.1831C228.439 82.0303 219.857 83.4539 208.839 83.4539C197.742 83.4539 189.838 81.1454 185.128 76.5283C180.417 71.9112 178.062 64.293 178.062 53.6737C178.062 42.5157 180.337 34.7051 184.888 30.242C189.519 25.7788 197.263 23.5472 208.121 23.5472C217.94 23.5472 225.046 25.2016 229.437 28.5105C233.828 31.7425 236.063 36.7059 236.143 43.4007C236.143 48.7103 234.706 52.7118 231.832 55.4051C229.038 58.0215 224.487 59.3296 218.18 59.3296ZM196.504 49.0566H213.27C215.426 49.0566 216.863 48.5564 217.581 47.556C218.38 46.5557 218.779 45.0936 218.779 43.1698C218.779 40.4765 218.06 38.6297 216.623 37.6293C215.186 36.552 212.552 36.0133 208.719 36.0133C204.169 36.0133 201.055 36.8983 199.379 38.6681C197.702 40.3611 196.744 43.8239 196.504 49.0566Z" fill="white"/>
                    <path d="M264.412 25.1631L265.61 33.4739C273.114 26.8561 280.619 23.5472 288.124 23.5472C296.107 23.5472 301.177 26.6252 303.333 32.7814C310.278 26.6252 317.464 23.5472 324.888 23.5472C330.237 23.5472 334.309 24.8938 337.103 27.5871C339.898 30.2804 341.295 34.205 341.295 39.3607V82.0688H323.691V44.6704C323.691 42.2079 323.252 40.4765 322.374 39.4761C321.495 38.4758 319.859 37.9756 317.464 37.9756C315.548 37.9756 313.711 38.3219 311.955 39.0144C310.198 39.707 307.644 41.0536 304.291 43.0544V82.0688H287.285V44.6704C287.285 42.2079 286.766 40.4765 285.729 39.4761C284.77 38.4758 283.174 37.9756 280.938 37.9756C277.825 37.9756 273.474 39.63 267.885 42.9389V82.0688H250.281V25.1631H264.412Z" fill="white"/>
                    <path d="M359.667 37.8602L357.991 26.3174C368.609 24.4706 378.868 23.5472 388.768 23.5472C396.751 23.5472 402.619 25.1247 406.372 28.2797C410.124 31.3577 412 36.7444 412 44.4395V82.0688H397.989L396.192 73.4118C390.284 80.1066 383.019 83.4539 374.397 83.4539C368.729 83.4539 364.098 82.0303 360.505 79.1831C356.913 76.259 355.116 72.219 355.116 67.0633V61.2919C355.116 56.7518 356.713 53.212 359.907 50.6726C363.1 48.1332 367.531 46.8635 373.199 46.8635H394.276V44.3241C394.196 41.3999 393.478 39.4377 392.121 38.4373C390.843 37.4369 388.328 36.9367 384.576 36.9367C378.029 36.9367 369.727 37.2445 359.667 37.8602ZM372.601 62.5616V64.7547C372.601 68.6792 374.916 70.6415 379.546 70.6415C384.337 70.6415 389.247 68.7947 394.276 65.101V57.1365H378.349C374.517 57.2135 372.601 59.0218 372.601 62.5616Z" fill="white"/>
                </svg>
            </div>
            <ul className='menu__list'>
                <Link to='/movies' className='menu__item'>
                    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.10572 9.36198C4.75336 9.57974 4.64425 10.0419 4.862 10.3943C5.07976 10.7466 5.54193 10.8557 5.89428 10.638L5.10572 9.36198ZM7.89428 9.40198C8.24664 9.18422 8.35575 8.72205 8.138 8.3697C7.92024 8.01734 7.45807 7.90823 7.10572 8.12598L7.89428 9.40198ZM8.25 8.76398C8.25 8.34977 7.91421 8.01398 7.5 8.01398C7.08579 8.01398 6.75 8.34977 6.75 8.76398H8.25ZM10.5 17.75C10.9142 17.75 11.25 17.4142 11.25 17C11.25 16.5858 10.9142 16.25 10.5 16.25V17.75ZM7.10562 8.12604C6.7533 8.34385 6.64425 8.80604 6.86206 9.15836C7.07987 9.51068 7.54206 9.61973 7.89438 9.40192L7.10562 8.12604ZM11.662 6.19098L11.337 5.51504C11.3132 5.52648 11.2901 5.53916 11.2676 5.55304L11.662 6.19098ZM13.338 6.19098L13.7324 5.55304C13.7099 5.53916 13.6868 5.52648 13.663 5.51504L13.338 6.19098ZM17.1056 9.40192C17.4579 9.61973 17.9201 9.51068 18.1379 9.15836C18.3557 8.80604 18.2467 8.34385 17.8944 8.12604L17.1056 9.40192ZM9.75 17C9.75 17.4142 10.0858 17.75 10.5 17.75C10.9142 17.75 11.25 17.4142 11.25 17H9.75ZM13.75 17C13.75 17.4142 14.0858 17.75 14.5 17.75C14.9142 17.75 15.25 17.4142 15.25 17H13.75ZM10.5 16.25C10.0858 16.25 9.75 16.5858 9.75 17C9.75 17.4142 10.0858 17.75 10.5 17.75V16.25ZM14.5 17.75C14.9142 17.75 15.25 17.4142 15.25 17C15.25 16.5858 14.9142 16.25 14.5 16.25V17.75ZM14.5 16.25C14.0858 16.25 13.75 16.5858 13.75 17C13.75 17.4142 14.0858 17.75 14.5 17.75V16.25ZM18.25 8.76398C18.25 8.34977 17.9142 8.01398 17.5 8.01398C17.0858 8.01398 16.75 8.34977 16.75 8.76398H18.25ZM17.8943 8.12598C17.5419 7.90823 17.0798 8.01734 16.862 8.3697C16.6442 8.72205 16.7534 9.18422 17.1057 9.40198L17.8943 8.12598ZM19.1057 10.638C19.4581 10.8557 19.9202 10.7466 20.138 10.3943C20.3558 10.0419 20.2466 9.57974 19.8943 9.36198L19.1057 10.638ZM5.89428 10.638L7.89428 9.40198L7.10572 8.12598L5.10572 9.36198L5.89428 10.638ZM6.75 8.76398V15.5H8.25V8.76398H6.75ZM6.75 15.5C6.75 16.1176 6.90676 16.7486 7.43266 17.1962C7.92874 17.6184 8.61023 17.75 9.35 17.75V16.25C8.73977 16.25 8.49626 16.1317 8.40484 16.0538C8.34324 16.0014 8.25 15.8824 8.25 15.5H6.75ZM9.35 17.75H10.5V16.25H9.35V17.75ZM7.89438 9.40192L12.0564 6.82892L11.2676 5.55304L7.10562 8.12604L7.89438 9.40192ZM11.987 6.86692C12.3112 6.71103 12.6888 6.71103 13.013 6.86692L13.663 5.51504C12.9279 5.16165 12.0721 5.16165 11.337 5.51504L11.987 6.86692ZM12.9436 6.82892L17.1056 9.40192L17.8944 8.12604L13.7324 5.55304L12.9436 6.82892ZM11.25 17V16H9.75V17H11.25ZM11.25 16C11.25 15.3096 11.8096 14.75 12.5 14.75V13.25C10.9812 13.25 9.75 14.4812 9.75 16H11.25ZM12.5 14.75C13.1904 14.75 13.75 15.3096 13.75 16H15.25C15.25 14.4812 14.0188 13.25 12.5 13.25V14.75ZM13.75 16V17H15.25V16H13.75ZM10.5 17.75H14.5V16.25H10.5V17.75ZM14.5 17.75H15.65V16.25H14.5V17.75ZM15.65 17.75C16.3898 17.75 17.0713 17.6184 17.5673 17.1962C18.0932 16.7486 18.25 16.1176 18.25 15.5H16.75C16.75 15.8824 16.6568 16.0014 16.5952 16.0538C16.5037 16.1317 16.2602 16.25 15.65 16.25V17.75ZM18.25 15.5V8.76398H16.75V15.5H18.25ZM17.1057 9.40198L19.1057 10.638L19.8943 9.36198L17.8943 8.12598L17.1057 9.40198Z"/>
                    </svg>
                    <p>Home</p>
                </Link>
                <Link to='/popular' className='menu__item'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" >
                        <path d="M12.0503 2L10.6803 4.8C9.70137 6.80035 8.38933 8.61962 6.80033 10.18L6.62033 10.35C5.59979 11.3408 5.01669 12.6977 5.00033 14.12V14.3C4.9733 17.0851 6.63293 19.6101 9.20033 20.69L9.46033 20.8C11.1442 21.5152 13.0465 21.5152 14.7303 20.8H14.7903C17.3769 19.6762 19.0365 17.1099 19.0003 14.29V9.95C18.1383 11.9185 16.5729 13.4946 14.6103 14.37C14.6103 14.37 14.6103 14.37 14.5503 14.37C14.4903 14.37 13.7903 14.66 13.4903 14.37C13.2224 14.0989 13.1967 13.6712 13.4303 13.37L13.5003 13.32H13.5503C15.8461 11.575 16.3813 8.34172 14.7703 5.95C13.4703 3.97 12.0503 2 12.0503 2Z"/>
                    </svg>
                    <p>Trends</p>
                </Link>
                <Link to='/favorite' className='menu__item'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                        <path d="M16.77 20.7843L12.48 17.4943C12.0722 17.1843 11.5078 17.1843 11.1 17.4943L6.77 20.7843C6.45424 21.0381 6.02377 21.0959 5.65228 20.9343C5.28078 20.7727 5.02957 20.4184 5 20.0143V5.95431C5.03878 5.12998 5.40465 4.35513 6.01656 3.80141C6.62847 3.24769 7.4359 2.96081 8.26 3.00431H15.26C16.0891 2.96643 16.8987 3.26256 17.5077 3.82643C18.1166 4.39029 18.4741 5.17479 18.5 6.00431V20.0143C18.4611 20.4038 18.2163 20.7426 17.8586 20.9017C17.501 21.0609 17.0855 21.0161 16.77 20.7843Z"/>
                    </svg>
                    <p>Favorites</p>
                </Link>
                {/* <li className='menu__item'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.2264 6.73077C17.4169 7.19491 17.8683 7.49854 18.37 7.5C19.0509 7.50549 19.6 8.05905 19.6 8.74V10.88C19.6 11.5648 19.0448 12.12 18.36 12.12C17.8583 12.1215 17.4069 12.4251 17.2164 12.8892C17.026 13.3534 17.134 13.8865 17.49 14.24C17.9676 14.7295 17.9676 15.5106 17.49 16L15.99 17.5C15.5005 17.9776 14.7195 17.9776 14.23 17.5C14.0042 17.2608 13.6889 17.1267 13.36 17.13C13.0294 17.1273 12.7114 17.2568 12.4767 17.4896C12.242 17.7225 12.11 18.0394 12.11 18.37C12.11 19.0548 11.5548 19.61 10.87 19.61H8.73C8.04517 19.61 7.49 19.0548 7.49 18.37C7.49001 18.0394 7.358 17.7225 7.12328 17.4896C6.88857 17.2568 6.5706 17.1273 6.24 17.13C5.91111 17.1267 5.59576 17.2608 5.37 17.5C4.88055 17.9776 4.09945 17.9776 3.61 17.5L2.11 16C1.63237 15.5106 1.63237 14.7295 2.11 14.24C2.46605 13.8865 2.57402 13.3534 2.38355 12.8892C2.19308 12.4251 1.7417 12.1215 1.24 12.12C0.911132 12.12 0.595733 11.9894 0.363188 11.7568C0.130642 11.5243 0 11.2089 0 10.88V8.74C0 8.05517 0.555167 7.5 1.24 7.5C1.7417 7.49854 2.19308 7.19491 2.38355 6.73077C2.57402 6.26664 2.46605 5.73346 2.11 5.38C1.63237 4.89055 1.63237 4.10945 2.11 3.62L3.61 2.12C4.09945 1.64237 4.88055 1.64237 5.37 2.12C5.59576 2.35919 5.91111 2.49331 6.24 2.49C6.57234 2.49269 6.89185 2.36186 7.12685 2.12685C7.36186 1.89185 7.49269 1.57234 7.49 1.24C7.49 0.555167 8.04517 0 8.73 0H10.88C11.5648 0 12.12 0.555167 12.12 1.24C12.1173 1.57234 12.2481 1.89185 12.4831 2.12685C12.7182 2.36186 13.0377 2.49269 13.37 2.49C13.6989 2.49331 14.0142 2.35919 14.24 2.12C14.7295 1.64237 15.5105 1.64237 16 2.12L17.5 3.62C17.9776 4.10945 17.9776 4.89055 17.5 5.38C17.144 5.73346 17.036 6.26664 17.2264 6.73077ZM6.34 9.81C6.34 7.8991 7.8891 6.35 9.8 6.35C10.7177 6.35 11.5977 6.71454 12.2466 7.36341C12.8955 8.01229 13.26 8.89235 13.26 9.81C13.26 11.7209 11.7109 13.27 9.8 13.27C7.8891 13.27 6.34 11.7209 6.34 9.81Z" />
                    </svg>
                    <p>Settings</p>
                </li> */}
                <Filter/>
            </ul>
        </div>
    )
}