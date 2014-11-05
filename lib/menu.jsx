var React = require('react');
module.exports = React.createClass({
    render: function () {
        return (
            <div className="pt-triggers">
                <button className="pt-touch-button">previous page</button>
                <button className="pt-touch-button">next page</button>
                <div id="dl-menu" className="dl-menuwrapper">
                    <button className="dl-trigger">Choose a transition</button>
                    <ul className="dl-menu">
                        <li>
                            <a href="#">Move</a>
                            <ul className="dl-submenu">
                                <li data-animation={1}>
                                    <a href="#">Move to left/ from right</a>
                                </li>
                                <li data-animation={2}>
                                    <a href="#">Move to right/ from left</a>
                                </li>
                                <li data-animation={3}>
                                    <a href="#">Move to top/ from bottom</a>
                                </li>
                                <li data-animation={4}>
                                    <a href="#">Move to bottom/ from top</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Fade</a>
                            <ul className="dl-submenu">
                                <li data-animation={5}>
                                    <a href="#">Fade / from right</a>
                                </li>
                                <li data-animation={6}>
                                    <a href="#">Fade / from left</a>
                                </li>
                                <li data-animation={7}>
                                    <a href="#">Fade / from bottom</a>
                                </li>
                                <li data-animation={8}>
                                    <a href="#">Fade / from top</a>
                                </li>
                                <li data-animation={9}>
                                    <a href="#">Fade left / Fade right</a>
                                </li>
                                <li data-animation={10}>
                                    <a href="#">Fade right / Fade left</a>
                                </li>
                                <li data-animation={11}>
                                    <a href="#">Fade top / Fade bottom</a>
                                </li>
                                <li data-animation={12}>
                                    <a href="#">Fade bottom / Fade top</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Different easing</a>
                            <ul className="dl-submenu">
                                <li data-animation={13}>
                                    <a href="#">Different easing / from right</a>
                                </li>
                                <li data-animation={14}>
                                    <a href="#">Different easing / from left</a>
                                </li>
                                <li data-animation={15}>
                                    <a href="#">Different easing / from bottom</a>
                                </li>
                                <li data-animation={16}>
                                    <a href="#">Different easing / from top</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Scale</a>
                            <ul className="dl-submenu">
                                <li data-animation={17}>
                                    <a href="#">Scale down / from right</a>
                                </li>
                                <li data-animation={18}>
                                    <a href="#">Scale down / from left</a>
                                </li>
                                <li data-animation={19}>
                                    <a href="#">Scale down / from bottom</a>
                                </li>
                                <li data-animation={20}>
                                    <a href="#">Scale down / from top</a>
                                </li>
                                <li data-animation={21}>
                                    <a href="#">Scale down / scale down</a>
                                </li>
                                <li data-animation={22}>
                                    <a href="#">Scale up / scale up</a>
                                </li>
                                <li data-animation={23}>
                                    <a href="#">Move to left / scale up</a>
                                </li>
                                <li data-animation={24}>
                                    <a href="#">Move to right / scale up</a>
                                </li>
                                <li data-animation={25}>
                                    <a href="#">Move to top / scale up</a>
                                </li>
                                <li data-animation={26}>
                                    <a href="#">Move to bottom / scale up</a>
                                </li>
                                <li data-animation={27}>
                                    <a href="#">Scale down / scale up</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Rotate</a>
                            <ul className="dl-submenu">
                                <li>
                                    <a href="#">Glue</a>
                                    <ul className="dl-submenu">
                                        <li data-animation={28}>
                                            <a href="#">Glue left / from right</a>
                                        </li>
                                        <li data-animation={29}>
                                            <a href="#">Glue right / from left</a>
                                        </li>
                                        <li data-animation={30}>
                                            <a href="#">Glue bottom / from top</a>
                                        </li>
                                        <li data-animation={31}>
                                            <a href="#">Glue top / from bottom</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">Flip</a>
                                    <ul className="dl-submenu">
                                        <li data-animation={32}>
                                            <a href="#">Flip right</a>
                                        </li>
                                        <li data-animation={33}>
                                            <a href="#">Flip left</a>
                                        </li>
                                        <li data-animation={34}>
                                            <a href="#">Flip top</a>
                                        </li>
                                        <li data-animation={35}>
                                            <a href="#">Flip bottom</a>
                                        </li>
                                    </ul>
                                </li>
                                <li data-animation={36}>
                                    <a href="#">Fall</a>
                                </li>
                                <li data-animation={37}>
                                    <a href="#">Newspaper</a>
                                </li>
                                <li>
                                    <a href="#">Push / Pull</a>
                                    <ul className="dl-submenu">
                                        <li data-animation={38}>
                                            <a href="#">Push left / from right</a>
                                        </li>
                                        <li data-animation={39}>
                                            <a href="#">Push right / from left</a>
                                        </li>
                                        <li data-animation={40}>
                                            <a href="#">Push top / from bottom</a>
                                        </li>
                                        <li data-animation={41}>
                                            <a href="#">Push bottom / from top</a>
                                        </li>
                                        <li data-animation={42}>
                                            <a href="#">Push left / pull right</a>
                                        </li>
                                        <li data-animation={43}>
                                            <a href="#">Push right / pull left</a>
                                        </li>
                                        <li data-animation={44}>
                                            <a href="#">Push top / pull bottom</a>
                                        </li>
                                        <li data-animation={45}>
                                            <a href="#">Push bottom / pull top</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">Fold / Unfold</a>
                                    <ul className="dl-submenu">
                                        <li data-animation={46}>
                                            <a href="#">Fold left / from right</a>
                                        </li>
                                        <li data-animation={47}>
                                            <a href="#">Fold right / from left</a>
                                        </li>
                                        <li data-animation={48}>
                                            <a href="#">Fold top / from bottom</a>
                                        </li>
                                        <li data-animation={49}>
                                            <a href="#">Fold bottom / from top</a>
                                        </li>
                                        <li data-animation={50}>
                                            <a href="#">Move to right / unfold left</a>
                                        </li>
                                        <li data-animation={51}>
                                            <a href="#">Move to left / unfold right</a>
                                        </li>
                                        <li data-animation={52}>
                                            <a href="#">Move to bottom / unfold top</a>
                                        </li>
                                        <li data-animation={53}>
                                            <a href="#">Move to top / unfold bottom</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">Room</a>
                                    <ul className="dl-submenu">
                                        <li data-animation={54}>
                                            <a href="#">Room to left</a>
                                        </li>
                                        <li data-animation={55}>
                                            <a href="#">Room to right</a>
                                        </li>
                                        <li data-animation={56}>
                                            <a href="#">Room to top</a>
                                        </li>
                                        <li data-animation={57}>
                                            <a href="#">Room to bottom</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">Cube</a>
                                    <ul className="dl-submenu">
                                        <li data-animation={58}>
                                            <a href="#">Cube to left</a>
                                        </li>
                                        <li data-animation={59}>
                                            <a href="#">Cube to right</a>
                                        </li>
                                        <li data-animation={60}>
                                            <a href="#">Cube to top</a>
                                        </li>
                                        <li data-animation={61}>
                                            <a href="#">Cube to bottom</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">Carousel</a>
                                    <ul className="dl-submenu">
                                        <li data-animation={62}>
                                            <a href="#">Carousel to left</a>
                                        </li>
                                        <li data-animation={63}>
                                            <a href="#">Carousel to right</a>
                                        </li>
                                        <li data-animation={64}>
                                            <a href="#">Carousel to top</a>
                                        </li>
                                        <li data-animation={65}>
                                            <a href="#">Carousel to bottom</a>
                                        </li>
                                    </ul>
                                </li>
                                <li data-animation={66}>
                                    <a href="#">Sides</a>
                                </li>
                            </ul>
                        </li>
                        <li data-animation={67}>
                            <a href="#">Slide</a>
                        </li>
                    </ul>
                </div>{/* /dl-menu-wrapper*/}
            </div>
            );
    }
});