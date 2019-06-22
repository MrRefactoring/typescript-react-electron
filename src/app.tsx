import * as React from 'react';
import './app.less';
import { Buttons } from './components/buttons';
import { Inputs } from './components/inputs';

export class App extends React.Component<IProps, IState> {
  public render() {
    return <main>
      <Buttons />
      <Inputs />
    </main>;
  }
}

interface IProps {}

interface IState {}
