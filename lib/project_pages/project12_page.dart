import 'package:flutter/material.dart';
import 'package:flutter/foundation.dart';
import 'dart:html' as html;
import '../web_specific.dart' if (dart.library.io) '../stub.dart';

class FlipbookEmbed extends StatelessWidget {
  final String flipbookUrl;
  final String viewType;
  final double height;

  const FlipbookEmbed({
    super.key,
    required this.flipbookUrl,
    required this.viewType,
    this.height = 600,
  });

  @override
  Widget build(BuildContext context) {
    if (kIsWeb) {
      registerFlipbookViewFactory(viewType, flipbookUrl);
      return SizedBox(
        height: height,
        width: double.infinity,
        child: HtmlElementView(viewType: viewType),
      );
    } else {
      return const Text('Flipbook only available on web.');
    }
  }
}

class Project12Page extends StatelessWidget {
  const Project12Page({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFF9F9F9),
      appBar: AppBar(
        title: const Text('IB Art Exhibition: Interpreting Childhood'),
        backgroundColor: Colors.white,
        foregroundColor: Colors.black,
        elevation: 0,
        surfaceTintColor: Colors.transparent,
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.symmetric(vertical: 24),
        child: Center(
          child: ConstrainedBox(
            constraints: const BoxConstraints(maxWidth: 900),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const Text(
                  'IB Art Exhibition: Interpreting Childhood',
                  style: TextStyle(fontSize: 28, fontWeight: FontWeight.bold),
                ),
                const SizedBox(height: 4),
                const Text(
                  'An Artistic Exploration of Growing Up: Childhood Memories, Identity, and Vietnamese Heritage',
                  style: TextStyle(fontSize: 18, fontWeight: FontWeight.w300),
                ),
                const SizedBox(height: 32),
                Row(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: const [
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text('Institution', style: TextStyle(fontWeight: FontWeight.bold)),
                          SizedBox(height: 4),
                          Text('International Baccalaureate Higher Level Visual Arts'),
                        ],
                      ),
                    ),
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text('Strategies:', style: TextStyle(fontWeight: FontWeight.bold)),
                          SizedBox(height: 4),
                          Text('Narrative Curation, Conceptual Development, Cultural Storytelling'),
                        ],
                      ),
                    ),
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text('Timeline:', style: TextStyle(fontWeight: FontWeight.bold)),
                          SizedBox(height: 4),
                          Text('Aug 2022 – Apr 2023'),
                        ],
                      ),
                    ),
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text('Tools:', style: TextStyle(fontWeight: FontWeight.bold)),
                          SizedBox(height: 4),
                          Text('Fine Arts Media, Digital Media, Found Objects'),
                        ],
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 32),

                const Text(
                  '''My body of work revolves around my interpretation and personal experience of childhood through an innocent and imaginative lens. Through the subthemes of nature, family, femininity and my Vietnamese culture, I explored how childhood has not only shaped my identity, but my perspective of my future, knowing that my childhood days are over...''',
                  style: TextStyle(fontSize: 16, height: 1.6),
                ),
                const SizedBox(height: 40),

                const Text(
                  'Selected Artworks Gallery:',
                  style: TextStyle(fontSize: 20),
                ),
                const SizedBox(height: 16),
                const HorizontalArtworkScroller(),
                const SizedBox(height: 40),

                const Text(
                  'Comparative Analysis Flipbook:',
                  style: TextStyle(fontSize: 20),
                ),
                const SizedBox(height: 16),
                const FlipbookEmbed(
                  flipbookUrl: 'https://heyzine.com/flip-book/6bc16db300.html',
                  viewType: 'exhibition-catalogue',
                ),
                const SizedBox(height: 40),

                const Text(
                  'Visual Process Book Flipbook:',
                  style: TextStyle(fontSize: 20),
                ),
                const SizedBox(height: 16),
                const FlipbookEmbed(
                  flipbookUrl: 'https://heyzine.com/flip-book/7318e93e43.html',
                  viewType: 'visual-process-book',
                ),
                const SizedBox(height: 40),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

class HorizontalArtworkScroller extends StatefulWidget {
  const HorizontalArtworkScroller({super.key});

  @override
  State<HorizontalArtworkScroller> createState() => _HorizontalArtworkScrollerState();
}

class _HorizontalArtworkScrollerState extends State<HorizontalArtworkScroller> {
  final PageController _controller = PageController(viewportFraction: 0.85);
  final int imageCount = 9;

  void _scrollToPrevious() {
    if (_controller.page! > 0) {
      _controller.previousPage(duration: const Duration(milliseconds: 300), curve: Curves.easeInOut);
    }
  }

  void _scrollToNext() {
    if (_controller.page! < imageCount - 1) {
      _controller.nextPage(duration: const Duration(milliseconds: 300), curve: Curves.easeInOut);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        SizedBox(
          height: 700,
          child: PageView.builder(
            controller: _controller,
            itemCount: imageCount,
            itemBuilder: (context, index) {
              return Padding(
                padding: const EdgeInsets.symmetric(horizontal: 12),
                child: ClipRRect(
                  borderRadius: BorderRadius.circular(16),
                  child: Image.asset(
                    'assets/images/ex${index + 1}.png',
                    fit: BoxFit.cover,
                  ),
                ),
              );
            },
          ),
        ),
        const SizedBox(height: 12),
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            ElevatedButton(
              onPressed: _scrollToPrevious,
              style: ElevatedButton.styleFrom(
                shape: const CircleBorder(),
                padding: const EdgeInsets.all(12),
                backgroundColor: Colors.white,
                foregroundColor: Colors.black,
              ),
              child: const Icon(Icons.arrow_back),
            ),
            const SizedBox(width: 16),
            ElevatedButton(
              onPressed: _scrollToNext,
              style: ElevatedButton.styleFrom(
                shape: const CircleBorder(),
                padding: const EdgeInsets.all(12),
                backgroundColor: Colors.white,
                foregroundColor: Colors.black,
              ),
              child: const Icon(Icons.arrow_forward),
            ),
          ],
        ),
      ],
    );
  }
}