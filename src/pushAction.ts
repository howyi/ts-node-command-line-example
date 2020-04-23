import {
  CommandLineAction,
  CommandLineFlagParameter,
} from '@rushstack/ts-command-line';

export default class PushAction extends CommandLineAction {
  private _force: CommandLineFlagParameter | undefined;

  public constructor() {
    super({
      actionName: 'push',
      summary: 'Pushes a widget to the service',
      documentation: 'Your long description goes here.',
    });
  }

  // eslint-disable-next-line class-methods-use-this
  protected async onExecute(): Promise<void> {
    // abstract
    console.log('こんにちは￿');
  }

  protected onDefineParameters(): void {
    // abstract
    this._force = this.defineFlagParameter({
      parameterLongName: '--force',
      parameterShortName: '-f',
      description: 'Push and overwrite any existing state',
    });
  }
}
