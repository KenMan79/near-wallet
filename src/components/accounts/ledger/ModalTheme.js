import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    .modal {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 40px 25px !important;

        svg {
            margin: 20px 0;
        }

        button {
            svg {
                margin: 0;
            }
        }

        h2 {
            text-align: center;

            @media (max-width: 500px) {
                max-width: 85%
            }

            &.dots {
                &:after {
                    content: '.';
                    animation: link 1s steps(5, end) infinite;
                
                    @keyframes link {
                        0%, 20% {
                            color: rgba(0,0,0,0);
                            text-shadow:
                                .3em 0 0 rgba(0,0,0,0),
                                .6em 0 0 rgba(0,0,0,0);
                        }
                        40% {
                            color: #4a4f54;
                            text-shadow:
                                .3em 0 0 rgba(0,0,0,0),
                                .6em 0 0 rgba(0,0,0,0);
                        }
                        60% {
                            text-shadow:
                                .3em 0 0 #4a4f54,
                                .6em 0 0 rgba(0,0,0,0);
                        }
                        80%, 100% {
                            text-shadow:
                                .3em 0 0 #4a4f54,
                                .6em 0 0 #4a4f54;
                        }
                    }
                }
            }
        }

        @media (min-width: 500px) {
            padding: 40px 75px !important;
        }

        ol, p {

            @media (min-width: 500px) {
                max-width: 400px;
            }
        }

        li {
            padding-left: 10px;
            margin-top: 20px;
        }

        p {
            text-align: center;
            
            :first-of-type {
                margin-top: 30px;
            }
        }

        button {
            width: 100%;

            @media (min-width: 500px) {
                width: 300px;
            }

            .blue, .primary-gray {
                margin-top: 30px;
            }

            :last-of-type {
                margin-top: 25px;
            }
        }
    }
`;