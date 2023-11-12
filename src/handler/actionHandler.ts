type ActionEvent<
  FormInputs extends {
    [key: string]: string | undefined | Date;
  },
  Parameters extends {
    [key: string]: string;
  },
> = {
  parameters: Parameters;
  commonEventObject: {
    formInputs: {
      [key in keyof FormInputs]: FormInputs[key] extends string
        ? { stringInputs: { value: string[] } }
        : FormInputs[key] extends string | undefined
        ? { stringInputs: { value: string[] } } | undefined
        : FormInputs[key] extends Date
        ? {
            dateTimeInput: {
              msSinceEpoch: number; // ドキュメント上ではstringだが、実際はnumber
            };
          }
        : never;
    };
  };
};

interface ActionHandler<T extends ActionEvent<any, any>> {
  handle(e?: T): GoogleAppsScript.Card_Service.ActionResponse;
}

abstract class BaseActionHandler<T extends ActionEvent<any, any>>
  implements ActionHandler<T>
{
  handle(e?: T): GoogleAppsScript.Card_Service.ActionResponse {
    try {
      return this.handleEvent(e);
    } catch (error) {
      throw error;
    }
  }

  protected notifyError(
    message: string,
  ): GoogleAppsScript.Card_Service.ActionResponse {
    return CardService.newActionResponseBuilder()
      .setNotification(CardService.newNotification().setText(message))
      .build();
  }

  protected abstract handleEvent(
    e?: T,
  ): GoogleAppsScript.Card_Service.ActionResponse;
}
