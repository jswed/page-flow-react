var React = require('react');
module.exports = React.createClass({
    propTypes: {
        onChange: React.PropTypes.func.isRequired
    },
    pickEffect: function (animation) {
        var inClass;
        var outClass;
        switch (animation) {
            case 1:
                outClass = 'pt-page-moveToLeft';
                inClass = 'pt-page-moveFromRight';
                break;
            case 2:
                outClass = 'pt-page-moveToRight';
                inClass = 'pt-page-moveFromLeft';
                break;
            case 3:
                outClass = 'pt-page-moveToTop';
                inClass = 'pt-page-moveFromBottom';
                break;
            case 4:
                outClass = 'pt-page-moveToBottom';
                inClass = 'pt-page-moveFromTop';
                break;
            case 5:
                outClass = 'pt-page-fade';
                inClass = 'pt-page-moveFromRight pt-page-ontop';
                break;
            case 6:
                outClass = 'pt-page-fade';
                inClass = 'pt-page-moveFromLeft pt-page-ontop';
                break;
            case 7:
                outClass = 'pt-page-fade';
                inClass = 'pt-page-moveFromBottom pt-page-ontop';
                break;
            case 8:
                outClass = 'pt-page-fade';
                inClass = 'pt-page-moveFromTop pt-page-ontop';
                break;
            case 9:
                outClass = 'pt-page-moveToLeftFade';
                inClass = 'pt-page-moveFromRightFade';
                break;
            case 10:
                outClass = 'pt-page-moveToRightFade';
                inClass = 'pt-page-moveFromLeftFade';
                break;
            case 11:
                outClass = 'pt-page-moveToTopFade';
                inClass = 'pt-page-moveFromBottomFade';
                break;
            case 12:
                outClass = 'pt-page-moveToBottomFade';
                inClass = 'pt-page-moveFromTopFade';
                break;
            case 13:
                outClass = 'pt-page-moveToLeftEasing pt-page-ontop';
                inClass = 'pt-page-moveFromRight';
                break;
            case 14:
                outClass = 'pt-page-moveToRightEasing pt-page-ontop';
                inClass = 'pt-page-moveFromLeft';
                break;
            case 15:
                outClass = 'pt-page-moveToTopEasing pt-page-ontop';
                inClass = 'pt-page-moveFromBottom';
                break;
            case 16:
                outClass = 'pt-page-moveToBottomEasing pt-page-ontop';
                inClass = 'pt-page-moveFromTop';
                break;
            case 17:
                outClass = 'pt-page-scaleDown';
                inClass = 'pt-page-moveFromRight pt-page-ontop';
                break;
            case 18:
                outClass = 'pt-page-scaleDown';
                inClass = 'pt-page-moveFromLeft pt-page-ontop';
                break;
            case 19:
                outClass = 'pt-page-scaleDown';
                inClass = 'pt-page-moveFromBottom pt-page-ontop';
                break;
            case 20:
                outClass = 'pt-page-scaleDown';
                inClass = 'pt-page-moveFromTop pt-page-ontop';
                break;
            case 21:
                outClass = 'pt-page-scaleDown';
                inClass = 'pt-page-scaleUpDown pt-page-delay300';
                break;
            case 22:
                outClass = 'pt-page-scaleDownUp';
                inClass = 'pt-page-scaleUp pt-page-delay300';
                break;
            case 23:
                outClass = 'pt-page-moveToLeft pt-page-ontop';
                inClass = 'pt-page-scaleUp';
                break;
            case 24:
                outClass = 'pt-page-moveToRight pt-page-ontop';
                inClass = 'pt-page-scaleUp';
                break;
            case 25:
                outClass = 'pt-page-moveToTop pt-page-ontop';
                inClass = 'pt-page-scaleUp';
                break;
            case 26:
                outClass = 'pt-page-moveToBottom pt-page-ontop';
                inClass = 'pt-page-scaleUp';
                break;
            case 27:
                outClass = 'pt-page-scaleDownCenter';
                inClass = 'pt-page-scaleUpCenter pt-page-delay400';
                break;
            case 28:
                outClass = 'pt-page-rotateRightSideFirst';
                inClass = 'pt-page-moveFromRight pt-page-delay200 pt-page-ontop';
                break;
            case 29:
                outClass = 'pt-page-rotateLeftSideFirst';
                inClass = 'pt-page-moveFromLeft pt-page-delay200 pt-page-ontop';
                break;
            case 30:
                outClass = 'pt-page-rotateTopSideFirst';
                inClass = 'pt-page-moveFromTop pt-page-delay200 pt-page-ontop';
                break;
            case 31:
                outClass = 'pt-page-rotateBottomSideFirst';
                inClass = 'pt-page-moveFromBottom pt-page-delay200 pt-page-ontop';
                break;
            case 32:
                outClass = 'pt-page-flipOutRight';
                inClass = 'pt-page-flipInLeft pt-page-delay500';
                break;
            case 33:
                outClass = 'pt-page-flipOutLeft';
                inClass = 'pt-page-flipInRight pt-page-delay500';
                break;
            case 34:
                outClass = 'pt-page-flipOutTop';
                inClass = 'pt-page-flipInBottom pt-page-delay500';
                break;
            case 35:
                outClass = 'pt-page-flipOutBottom';
                inClass = 'pt-page-flipInTop pt-page-delay500';
                break;
            case 36:
                outClass = 'pt-page-rotateFall pt-page-ontop';
                inClass = 'pt-page-scaleUp';
                break;
            case 37:
                outClass = 'pt-page-rotateOutNewspaper';
                inClass = 'pt-page-rotateInNewspaper pt-page-delay500';
                break;
            case 38:
                outClass = 'pt-page-rotatePushLeft';
                inClass = 'pt-page-moveFromRight';
                break;
            case 39:
                outClass = 'pt-page-rotatePushRight';
                inClass = 'pt-page-moveFromLeft';
                break;
            case 40:
                outClass = 'pt-page-rotatePushTop';
                inClass = 'pt-page-moveFromBottom';
                break;
            case 41:
                outClass = 'pt-page-rotatePushBottom';
                inClass = 'pt-page-moveFromTop';
                break;
            case 42:
                outClass = 'pt-page-rotatePushLeft';
                inClass = 'pt-page-rotatePullRight pt-page-delay180';
                break;
            case 43:
                outClass = 'pt-page-rotatePushRight';
                inClass = 'pt-page-rotatePullLeft pt-page-delay180';
                break;
            case 44:
                outClass = 'pt-page-rotatePushTop';
                inClass = 'pt-page-rotatePullBottom pt-page-delay180';
                break;
            case 45:
                outClass = 'pt-page-rotatePushBottom';
                inClass = 'pt-page-rotatePullTop pt-page-delay180';
                break;
            case 46:
                outClass = 'pt-page-rotateFoldLeft';
                inClass = 'pt-page-moveFromRightFade';
                break;
            case 47:
                outClass = 'pt-page-rotateFoldRight';
                inClass = 'pt-page-moveFromLeftFade';
                break;
            case 48:
                outClass = 'pt-page-rotateFoldTop';
                inClass = 'pt-page-moveFromBottomFade';
                break;
            case 49:
                outClass = 'pt-page-rotateFoldBottom';
                inClass = 'pt-page-moveFromTopFade';
                break;
            case 50:
                outClass = 'pt-page-moveToRightFade';
                inClass = 'pt-page-rotateUnfoldLeft';
                break;
            case 51:
                outClass = 'pt-page-moveToLeftFade';
                inClass = 'pt-page-rotateUnfoldRight';
                break;
            case 52:
                outClass = 'pt-page-moveToBottomFade';
                inClass = 'pt-page-rotateUnfoldTop';
                break;
            case 53:
                outClass = 'pt-page-moveToTopFade';
                inClass = 'pt-page-rotateUnfoldBottom';
                break;
            case 54:
                outClass = 'pt-page-rotateRoomLeftOut pt-page-ontop';
                inClass = 'pt-page-rotateRoomLeftIn';
                break;
            case 55:
                outClass = 'pt-page-rotateRoomRightOut pt-page-ontop';
                inClass = 'pt-page-rotateRoomRightIn';
                break;
            case 56:
                outClass = 'pt-page-rotateRoomTopOut pt-page-ontop';
                inClass = 'pt-page-rotateRoomTopIn';
                break;
            case 57:
                outClass = 'pt-page-rotateRoomBottomOut pt-page-ontop';
                inClass = 'pt-page-rotateRoomBottomIn';
                break;
            case 58:
                outClass = 'pt-page-rotateCubeLeftOut pt-page-ontop';
                inClass = 'pt-page-rotateCubeLeftIn';
                break;
            case 59:
                outClass = 'pt-page-rotateCubeRightOut pt-page-ontop';
                inClass = 'pt-page-rotateCubeRightIn';
                break;
            case 60:
                outClass = 'pt-page-rotateCubeTopOut pt-page-ontop';
                inClass = 'pt-page-rotateCubeTopIn';
                break;
            case 61:
                outClass = 'pt-page-rotateCubeBottomOut pt-page-ontop';
                inClass = 'pt-page-rotateCubeBottomIn';
                break;
            case 62:
                outClass = 'pt-page-rotateCarouselLeftOut pt-page-ontop';
                inClass = 'pt-page-rotateCarouselLeftIn';
                break;
            case 63:
                outClass = 'pt-page-rotateCarouselRightOut pt-page-ontop';
                inClass = 'pt-page-rotateCarouselRightIn';
                break;
            case 64:
                outClass = 'pt-page-rotateCarouselTopOut pt-page-ontop';
                inClass = 'pt-page-rotateCarouselTopIn';
                break;
            case 65:
                outClass = 'pt-page-rotateCarouselBottomOut pt-page-ontop';
                inClass = 'pt-page-rotateCarouselBottomIn';
                break;
            case 66:
                outClass = 'pt-page-rotateSidesOut';
                inClass = 'pt-page-rotateSidesIn pt-page-delay200';
                break;
            case 67:
                outClass = 'pt-page-rotateSlideOut';
                inClass = 'pt-page-rotateSlideIn';
                break;

        }
        return {
            'enter': inClass,
            'leave': outClass
        }
    },
    componentDidMount: function () {
        var me = this;
        $('#dl-menu').dlmenu({
            animationClasses: { in: 'dl-animate-in-2', out: 'dl-animate-out-2' },
            onLinkClick: function (el, ev) {
                ev.preventDefault();
                var effect = me.pickEffect(el.data('animation'))
                me.props.onChange(effect);
            }
        });
    },
    render: function () {
        return (
                <div id="dl-menu" className="dl-menuwrapper">
                    <button className="dl-trigger">Pick One</button>
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
                </div>
            );
    }
});