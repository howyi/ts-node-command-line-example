import {
  CommandLineFlagParameter,
  CommandLineParser,
} from '@rushstack/ts-command-line';
import PushAction from './pushAction';

export default class WidgetCommandLine extends CommandLineParser {
  private _verbose: CommandLineFlagParameter | undefined;

  public constructor() {
    super({
      toolFilename: 'widget',
      toolDescription: 'The widget tool is really great.',
    });

    this.addAction(new PushAction());
  }

  protected onDefineParameters(): void {
    // abstract
    this._verbose = this.defineFlagParameter({
      parameterLongName: '--verbose',
      parameterShortName: '-v',
      description: 'Show extra logging detail',
    });
  }

  protected onExecute(): Promise<void> {
    // override
    return super.onExecute();
  }
}
