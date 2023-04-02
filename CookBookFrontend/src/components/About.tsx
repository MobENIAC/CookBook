import "../stylesheets/About.css";

export const About = () => {
    return (
        <section className="main">
            <h1>About</h1>
            <h3>Team ENIAC - developers behind the code</h3>
            <section className="profiles">
                <div className="profiles__card">
                    <div className="card__content">
                        <img className="card__img img__tas" src="https://lh3.googleusercontent.com/gGg8e2tj6Rjb42T6sZ3DHOmJTtxnKVAj21qfnoRevHHmWplvbHpmJwHQva1ajyMNCKAB2HPOvHQQJVDbeQ3G1PZGMcAcH0fKF2QC2JCCVQnaixqCJe5Mgg-yldIhWc4EkuOdgnI5lPYLQQRTgKWkvXqZ9SY7MUC1R3lwpiOp4yZbXRqjjh7AhuJMgo4zNLS9dFBLpEJrKmMPB-OY6PExEM3j7y-pWAnNyQJtpaKL7OXI4Ci8w3qXgYLhG4On2lhBzaWSvY53XSvGvpg5pJrP-3v0G94sBM1O1zy8teZ5-cVKzoit9YxDV5smou7LFTft4Lw9E4ALGk2Zk1r_ZC-vLYVrajiyPrvhv0XYmqwMHJCd2hw505NzAA0kHI7tTnhR22S-c4LmF1ZdwQu7GnPt4GY_GWMqtimcZLrF0XeN7BQWR6TUTQ-jzv7mBKu1euz8zBr8wBjV3zbui10WU6os-dg4aJSoNKc74T2QAkhDtRDig84Auz_m6yOR2bNrXObGA0yjhq9Ab5HNrQyMjyQwUL1_t71QKOFU5jIoZVK7i60VXjy42cJEfRymw9BnMDrGqHYWIVexnsHbASnkycgn9gp1fWgFLzaOHaDoR0rVlobkN0ZDs46J5s7YtzCqvpn609TyYXPE2yp2_h2K-MyeVqojtpz82ehzhc9rVpftyLNlZb17SppbPI6hksMT0aQYCzHq7Mj_Mj0OUCadWmYYinsQ_GYjFqHl_H7Ld8XQqDUmXi0_5ssWwT5FR-CZYfXhIqdTVWZII-jm8W0fjdgxKNeGqtt4cMKfIXnAImRzDLPAufLJPfZxxv9gxEmrcVJzhE1K457xXbOBRIEseLMBxI6uFOylqfl7AYJEZB_nDbXVS-Re3fgt_VbK7wuGeTVXMtruqLwhQmRRkJYFBQi_xBYBkeeAAUxs5IpYRmWyUTU8YmRU=w997-h1329-s-no?authuser=0"></img>
                        <div className="card__text">
                            <p className="devName">Tasaduq Hussain</p>
                        </div>
                    </div>
                    <p className="card__description" data-descr="ADD">I’m a Pakistani living in Stockholm with a passion for coding and new technologies. Looking for an opportunity that will challenge my coding and problem-solving skills. I am detail-oriented and self-driven with deep understanding, knowledge & skills of developing & implementing web-based solutions, maintaining & updating web applications.</p>
<div className="card__icons">
                    <a
                        href="https://www.linkedin.com/in/tasaduq-qureshi/"
                        target="_blank"
                        className="text-decoration-none px-2 card__icon"
                        title="LinkedIn - Tas"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-linkedin"
                            viewBox="0 0 16 16"
                        >
                            <path
                                d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                            />
                        </svg>
                    </a>
                    <a
                        href="https://github.com/Tas-Qureshi/"
                        className="text-decoration-none px-2 card__icon"
                        title="GitHub - Tas"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-github"
                            viewBox="0 0 16 16"
                        >
                            <path
                                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                            />
                        </svg>
                    </a>
                    <a
                        href="mailto:tasaduq.hussain@appliedtechnology.se"
                        className="text-decoration-none px-2 card__icon"
                        title="Email - Tas"
                    ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-envelope-fill"
                        viewBox="0 0 16 16"
                    >
                            <path
                                d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"
                            />
                        </svg>
                    </a>
                    </div>
                </div>
                <div className="profiles__card">
                    <div className="card__content">
                        <img className="card__img img__thanos" src="https://lh3.googleusercontent.com/D7PJFOcDfTbwsbehJ5J1dd6mpPWDyS1ZO-vDJNgss54pPe-umXdi0GnfkLxuenr21VGOeTwtQHJXhJCu8uHCh4m-EJzEiJTYDyZN6eQ3v-H6SBd1rSKC4nYKuhvJ90t3p8CafAYuNxcfdOb3kCIhCcNjO2JNGHjP4-gjQvOlGPOlx7lZh-9quMgQ4nvxHJcPv732ARm4enQsQWBQ3M3PRYMY-5thkAR7VL--FH2nkV4YYQAj3TPkWHQysXJTFYk4E3gZeOZ2mjuy6sx-XsjJ1xCbJc2OvNAEiWSOvUX6pAhRT6pgXCsmK6dkLZ5yRRPMBo9UysssS4QST7B6X-uM_S5jlE-DqWK8_BQecM-OTThPxhuSNgoQDbsMMqJPRwk2mouFxJxoa_PWOO1WPkskC2nqhOaPmmzARqwT63omdXsjVOdYjGrVR5zooRoSzbihyU90-j_vogOaQFyAN23CojNsrhRJdW3oUnimIMPS4Jal9Rdc0yseLknEthymMjoAeY8MMkr_qnwLS120x-KJyT41FpH0gjHsP5MkvNLV8ytIVHZCxgxrfW_IgwPuG3xxp-H5Duexgr7qsSpnuu7ow3TXJQHOG_pMCWez3kmog4z82NjvUfWfIwJVM6snEgpp61YYZj3gECMlYAgXITEk0YmCqU0-HHbQLwM7Dij8GA3GPMR_gTpzwKyWk1Yvpwton4LTz00pgFYpOWfTUv8_Jz9hIxWYa4n0-qwOzghQUHOi7gEWsREgdgmFtekzDV-5osS3eTm1b3IywIo6Q9pCMgHHuSLTlL-XytkmjTqqXLDZQvQjltrmn5xdkZA8Oy_THMI345H6aABumR8KV1maKcJuaMxYVsV61p433VjLLQAj5fUNo3zyfXflOB5qhiR98pP55zZuWymlidp8bzruuEmwlEkxUmzD55kGLM4Oeg3Gt7Xf=w971-h1174-s-no?authuser=0"></img>
                        <div className="card__text">
                            <p className="devName">Athanasios Kozadinos</p>
                        </div>
                    </div>
                    <p className="card__description" data-descr="ADD">I am a Greek living in Stockholm eager about web development & AI. As an engineer and inventor, I am always open to learning new technologies and applying them in practice. Natural leader who acts as a force multiplier in the team. Previously worked as industrial data scientist and plant director.</p>
<div className="card__icons">
                    <a
                        href="https://www.linkedin.com/in/thanos-kozadinos/"
                        target="_blank"
                        className="text-decoration-none px-2 card__icon"
                        title="LinkedIn - Thanos"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-linkedin"
                            viewBox="0 0 16 16"
                        >
                            <path
                                d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                            />
                        </svg>
                    </a>
                    <a
                        href="https://github.com/Thanos-Kozadinos"
                        className="text-decoration-none px-2 card__icon"
                        title="GitHub - Thanos"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-github"
                            viewBox="0 0 16 16"
                        >
                            <path
                                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                            />
                        </svg>
                    </a>
                    <a
                        href="mailto:akozadinos@hotmail.com"
                        className="text-decoration-none px-2 card__icon"
                        title="Email - Thanos"
                    ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-envelope-fill"
                        viewBox="0 0 16 16"
                    >
                            <path
                                d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"
                            />
                        </svg>
                    </a>
                </div>
                </div>
                <div className="profiles__card">
                    <div className="card__content">
                        <img className="card__img img__terhi" src="https://lh3.googleusercontent.com/tPgz3iYExtZmu6zxqJ-mZpBRAGths2o8-AR9OYsaO7vk3pT7ncsxgOeQtPXm2PQdwTugZIuYUH0Iza_kHqGSkzsi9NrJ8U7kGS3584y18vlcSgV5tj9hcSoUGlG1aX_rBLxO0uEEZeh6F4HVvXdKpmi_dRGJpjMBDut88-1HIdfxv5pFRdVpQpsPNdJAvBmOpsYekyOeuDyyf9a2NuHBWWBfabwD-wdPMoRUx9Bn8yewO_gZmzh_FjmDOTm1BdFy3wwh0X5QqqCSefH0vz2BeOs-xdk6AOznCVClwNu42ElTP2ROCH68p-0s9iC77lwGPOaezANEGB-inCh3xpMWjpq2PnLEbDTJeEix1vN1V36oNm9lJgO5bNRYL-dW8lfiO34TT2DRgs2aJxcPtJjCrDMh3LtjBfn_HJDgMPGqb6dwyUNoENh7HkkBhH8JFNyE0G7PHHvt6XTGB8P9WpUiTMKDom1RLVEjUTGgBsB5plXB8_uHf2nqyVI8_cSN9SmP2eVsnvW4n0i1GTQn9DeeaL7eyxgYDe1JMNKUos2xsu3GQWdwsbq5WFuQ8-oiuWPj1S2HyVvv2LFuBCg8PEcKatmjtsfD54MqANTBakmCGHsztw0xgm139PVUlDoy_KwuSkN9XgnQbU6SORsrJqDDrwbnkHXeEUJy15hjBdPFqQS2ivlNNFs3Ms1HhYavOr1IF3m_SeC2ZjQad2aefRNWRbJOX9dyJ-aHZLqnDY0f5JWehUUDc1KqulGdavngBh-LHSnWvrW8VomzE8BKzJF7q1UP056P-whmHwcwuHlyF7ZHrPIkh8Z0aqV_dab0FYdHUXDolnYJVblDMf4CH28QsSqjM5LaIXELr1kEw9Xh8QC1K4qgENtI_DSd7A-0U451tza4m5dqfw7iXjcoo4utDjgvrFHOr-uaV2ebPaeAchHadLtj=w888-h1329-s-no?authuser=0"></img>
                        <div className="card__text">
                            <p className="devName">Terhi Raudaskoski</p>
                        </div>
                    </div>
                    <p className="card__description" data-descr="ADD">I’m a Finn based in Oslo, an optimist that will never say no to a challenge. My previous experience working in a startup has taught me to adapt continuously - which comes handy when exploring the world of technology. I am excited to continue challenging myself as a Full Stack Developer and reach new heights in my professional work life.</p>
                    <div className="card__icons">
                    <a
                        href="https://www.linkedin.com/in/terhiraudaskoski/"
                        target="_blank"
                        className="text-decoration-none px-2 card__icon"
                        title="LinkedIn - Terhi"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-linkedin"
                            viewBox="0 0 16 16"
                        >
                            <path
                                d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                            />
                        </svg>
                    </a>
                    <a
                        href="https://github.com/Terhi-R/"
                        className="text-decoration-none px-2 card__icon"
                        title="GitHub - Terhi"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-github"
                            viewBox="0 0 16 16"
                        >
                            <path
                                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                            />
                        </svg>
                    </a>
                    <a
                        href="mailto:terhi.raudaskoski@gmail.com"
                        className="text-decoration-none px-2 card__icon"
                        title="Email - Terhi"
                    ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-envelope-fill"
                        viewBox="0 0 16 16"
                    >
                            <path
                                d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"
                            />
                        </svg>
                    </a>
                </div>
                </div>
            </section >
        </section >
    )
}