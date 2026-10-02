import { Component } from 'react';
import Toolbar from './Toolbar.jsx';
import ProjectList from './ProjectList.jsx';

export default class Portfolio extends Component {
  state = { selected: 'All' };

  selectFilter = (selected) => this.setState({ selected });

  render() {
    const { projects } = this.props;
    const { selected } = this.state;
    const visibleProjects = selected === 'All'
      ? projects
      : projects.filter((project) => project.category === selected);

    return (
      <main className="portfolio">
        <Toolbar filters={['All', 'Websites', 'Flayers', 'Business Cards']} selected={selected} onSelectFilter={this.selectFilter} />
        <ProjectList projects={visibleProjects} />
      </main>
    );
  }
}
