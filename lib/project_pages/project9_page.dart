import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import '../web_specific.dart' if (dart.library.io) '../stub.dart';

class FlipbookEmbed extends StatelessWidget {
  final String flipbookUrl;
  final String viewType;

  const FlipbookEmbed({
    super.key,
    required this.flipbookUrl,
    this.viewType = 'project9-flipbook',
  });

  @override
  Widget build(BuildContext context) {
    if (kIsWeb) {
      registerFlipbookViewFactory(viewType, flipbookUrl);
      return SizedBox(
        height: 600,
        child: HtmlElementView(viewType: viewType),
      );
    } else {
      return const Text('Flipbook only available on web.');
    }
  }
}

class Project9Page extends StatelessWidget {
  const Project9Page({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFF9F9F9),
      appBar: AppBar(
        title: const Text('Portraits of Youth Activists'),
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
                  'Portraits of Youth Activists',
                  style: TextStyle(fontSize: 28, fontWeight: FontWeight.bold),
                ),
                const SizedBox(height: 4),
                const Text(
                  'Illustration Series & Social Commentary',
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
                          Text('Course / Platform', style: TextStyle(fontWeight: FontWeight.bold)),
                          SizedBox(height: 4),
                          Text('Independent Art Series'),
                        ],
                      ),
                    ),
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text('Strategies:', style: TextStyle(fontWeight: FontWeight.bold)),
                          SizedBox(height: 4),
                          Text('''Portraiture, Primary Research, 
Political Commentary, Cultural Representation'''),
                        ],
                      ),
                    ),
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text('Timeline:', style: TextStyle(fontWeight: FontWeight.bold)),
                          SizedBox(height: 4),
                          Text('Aug 2020 – Jan 2021'),
                        ],
                      ),
                    ),
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text('Tools Used:', style: TextStyle(fontWeight: FontWeight.bold)),
                          SizedBox(height: 4),
                          Text('Paper & Graphite Pencils'),
                        ],
                      ),
                    ),
                  ],
                ),

                const SizedBox(height: 32),

                const Text(
                  'This series pays tribute to youth activists around the world who have stood up for climate justice, equity, education, and political reform. Through hand-drawn digital portraits, I sought to capture not only their likeness but the essence of their courage and conviction. Each piece is paired with research on their impact, creating a visual journal that celebrates their stories while inviting critical reflection.',
                  style: TextStyle(fontSize: 16, height: 1.6),
                ),

                const SizedBox(height: 40),

                const Text(
                  'Interactive Flipbook:',
                  style: TextStyle(fontSize: 20, fontWeight: FontWeight.normal),
                ),
                const SizedBox(height: 16),
                const FlipbookEmbed(
                  flipbookUrl: 'https://heyzine.com/flip-book/85f18576b8.html#page/1',
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}