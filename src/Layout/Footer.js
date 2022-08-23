import React, { Component } from 'react'

export default class footer extends Component {
    render() {
        return (
            <>
            <br /><br /><br /><br />
                <footer class="footer">
                    <div class="container">
                        <div class="footer-bottom">
                            <div class="wrap-copyright">
                                <div class="copyright" id="coppy">
                                    Copyright © 2022 IdentiPlant. Created with <i class="fa fa-heart"></i> by Group 4.
                                </div>
                                <div class="countries" id="coppy">
                                    <img src="images/logo-white.png" alt="logo" />Pamantasan ng Lungsod ng Maynila
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-8">
                                    <div class="menu-footer" >
                                        <ul>
                                            <li><a href="https://prodev-theron.github.io/dip-plantidentifier/" id="coppy">Home</a></li>
                                            <li><a href="../dip-plantidentifier/Floradex.html" id="coppy">Floradex</a></li>
                                            <li><a href="../Final IEEE Paper.pdf" id="coppy">IEEE Paper</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                                    <div class="social">
                                        <a href="https://www.linkedin.com/in/prodev-theron" title="Theron's LinkedIn">
                                            <i class="fa fa-linkedin"></i>
                                        </a>
                                        <a href="../Final IEEE Paper.pdf" title="IEEE Paperclip">
                                            <i class="fa fa-paperclip"></i>
                                        </a>
                                        <a href="https://github.com/proDev-Theron/dip-plantidentifier" title="Project's GitHub Repo">
                                            <i class="fa fa-github"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </>
        )
    }
}
