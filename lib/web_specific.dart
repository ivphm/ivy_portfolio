import 'dart:ui_web' as ui;
import 'dart:html' as html;

void registerFlipbookViewFactory(String viewType, String url) {
  // ignore: undefined_prefixed_name
  ui.platformViewRegistry.registerViewFactory(
    viewType,
    (int viewId) => html.IFrameElement()
      ..src = url
      ..style.border = 'none'
      ..width = '100%'
      ..height = '600',
  );
}

void registerWebsitePreviewViewFactory(String viewType, String url) {
  // Remove any existing view factory with the same viewType
  ui.platformViewRegistry.registerViewFactory(viewType, (int viewId) {
    final iframe = html.IFrameElement()
      ..src = url
      ..style.border = 'none'
      ..style.width = '100%'
      ..style.height = '100%';
    return iframe;
  });
}