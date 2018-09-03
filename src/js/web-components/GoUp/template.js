/**
 * Created by abaddon on 03.09.2018.
 */
const template = `
    <style>
        .goUp {
            position: fixed;
            display: none;
            align-items: center;
            justify-content: center;
            width: 50px;
            height: 50px;
            text-decoration: none;
            cursor: pointer;
            border-radius: 50%;
            overflow: hidden;
            box-shadow: 0 0 10px rgba(0,0,0,0.5);
        }
        .goUp.is-show {
            display: flex;
        }
        .goUp span {
            content: '';
            margin-top: 5px;
            display: block;
            border-top-style: solid;
            border-right-style: solid;
            border-top-width: 4px;
            border-right-width: 4px;
            width: 15px;
            height: 15px;
            transform: rotate(-45deg);
        }
    </style>
    <a class="goUp">
        <span></span>
    </a>
    `;
export default template;