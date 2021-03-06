import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";



import {images} from "../configs";
import {styles} from "./styles";

import {TopMenu} from "../components";
import PageScrollingText from "./sections/PageScrollingText";
import SectionHeader from "./sections/SectionHeader";
import StaticSectionFooter from "./sections/StaticSectionFooter";
import applicationPathConfig from "./configs/applicationPathConfig";

export  default class PageWithoutHeader extends Component {

    renderSectionHeader(){

        if(this.props.sectionHeaderTitle || this.props.sectionHeaderContent){
          return(
            <SectionHeader title={this.props.sectionHeaderTitle}
                content={this.props.sectionHeaderContent}/>
            );
        }
        else{
          return null;
        }
    }
    renderSectionFooter(){
        if(this.props.sectionFooterContent){
            return(<StaticSectionFooter content={this.props.sectionFooterContent}/>);
        }
        else{
          return null;
        }
    }
    renderBlueHeaderBar(){
      return(
              <PageScrollingText image={this.props.image} scrollingText={this.props.scrollingText} mobileImage={this.props.mobileImage}
              install={this.props.install} aboutText={this.props.aboutText}/>
          );


    }
    render(){

        var appTitle=applicationPathConfig.appTitle;
        if(this.props.appTitle){
          appTitle=this.props.appTitle;
        }
        return(
          <div style={styles.container}>
            <TopMenu  menus={applicationPathConfig.menus} selected={this.props.selected} appLogo={images.appIcon} appTitle={appTitle}
              appSubtitle={this.props.appSubtitle}/>
                  <div style={styles.headerBlankBar}/>  
                  <div style={styles.content}>
                        {this.renderSectionHeader()}
                        {this.props.children}
                        {this.renderSectionFooter()}
                 </div>
          </div>
        );

    }


}
