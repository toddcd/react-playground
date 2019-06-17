import React from "react";

class Accordion extends React.Component {
    static defaultProps = { sections: [] };
    state = {
        currentSectionIndex: 0
    };

    handleButtonClick = (index) => {
        console.log('Clicked'+index)
        this.setState({ currentSectionIndex: index })
    }
    renderSections() {
        return this.props.sections.map((section, index) => (
            <li key={index}>
                <button key={index} onClick={() => this.handleButtonClick(index)}>
                    {section.title}
                </button>
                {!!this.props.sections.length &&
                    this.state.currentSectionIndex === index &&
                    this.renderContent()}
            </li>
        ))
    }
    renderContent() {
        const currentSection = this.props.sections[this.state.currentSectionIndex]
        console.log(currentSection)
        return (
            <p className='content'>
                {currentSection.content}
            </p>
        )
    }
    render() {
        return (
            <ul>
                {this.renderSections()}
                {/*/!* only show content when the tabs array has length *!/*/}
            </ul>
        )
    }
}

export default Accordion;