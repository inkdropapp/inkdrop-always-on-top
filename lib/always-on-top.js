'use babel';

import { CompositeDisposable } from 'event-kit';

import { AlwaysOnTopButton } from './always-on-top-button';

class AlwaysOnTopPlugin {
  constructor() {
    this.disposables = new CompositeDisposable();
  }

  activate() {
    const toggleCommand = inkdrop.commands.add(document.body, {
      'always-on-top:toggle': () =>
        inkdrop.window.setAlwaysOnTop(!inkdrop.window.isAlwaysOnTop()),
    });
    this.disposables.add(toggleCommand);

    inkdrop.components.registerClass(AlwaysOnTopButton);
    inkdrop.layouts.insertComponentToLayoutBefore(
      'editor-header',
      'EditorHeaderMore',
      'AlwaysOnTopButton'
    );
  }

  deactivate() {
    inkdrop.window.setAlwaysOnTop(false);
    inkdrop.layouts.removeComponentFromLayout(
      'editor-header',
      'AlwaysOnTopButton'
    );
    inkdrop.components.deleteClass(AlwaysOnTopButton);
    this.disposables.dispose();
  }
}

module.exports = new AlwaysOnTopPlugin();
