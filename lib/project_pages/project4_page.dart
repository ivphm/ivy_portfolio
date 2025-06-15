// algos 2D

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import '../web_specific.dart' if (dart.library.io) '../stub.dart';

class PdfEmbed extends StatelessWidget {
  final String pdfUrl;
  final String viewType;

  const PdfEmbed({
    super.key,
    required this.pdfUrl,
    this.viewType = 'project4-pdf',
  });

  @override
  Widget build(BuildContext context) {
    if (kIsWeb) {
      registerFlipbookViewFactory(viewType, pdfUrl);
      return SizedBox(
        height: 600,
        child: HtmlElementView(viewType: viewType),
      );
    } else {
      return const Text('PDF preview only available on web.');
    }
  }
}

class Project4Page extends StatelessWidget {
  const Project4Page({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFF9F9F9),
      appBar: AppBar(
        title: const Text('YouTwitFace Algorithmic System Design'),
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
                  'YouTwitFace Algorithmic System Design',
                  style: TextStyle(fontSize: 28, fontWeight: FontWeight.bold),
                ),
                const SizedBox(height: 4),
                const Text(
                  'Data Structures and Points System Design',
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
                          Text('Course', style: TextStyle(fontWeight: FontWeight.bold)),
                          SizedBox(height: 4),
                          Text('SUTD: 50.004 Algorithms 2D'),
                        ],
                      ),
                    ),
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text('Strategies:', style: TextStyle(fontWeight: FontWeight.bold)),
                          SizedBox(height: 4),
                          Text('Data Structures, Algorithm & Systems Design, UX & Gamification Strategy'),
                        ],
                      ),
                    ),
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text('Timeline:', style: TextStyle(fontWeight: FontWeight.bold)),
                          SizedBox(height: 4),
                          Text('Feb 2024 – Apr 2024'),
                        ],
                      ),
                    ),
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text('Tools Used:', style: TextStyle(fontWeight: FontWeight.bold)),
                          SizedBox(height: 4),
                          Text('Python, Redis, Notion, Pseudocode'),
                        ],
                      ),
                    ),
                  ],
                ),

                const SizedBox(height: 32),

                const Text(
                  'YouTwitFace is a fictional social media app designed as part of an algorithm course to explore the implementation of an efficient point rewards system. Using graph data structures and performance optimization techniques, we mapped interactions (likes, posts, shares) into gamified incentives while maintaining scalability and fairness across users.',
                  style: TextStyle(fontSize: 16, height: 1.6),
                ),

                const SizedBox(height: 40),

                const Text(
                  'Project Report:',
                  style: TextStyle(fontSize: 20, fontWeight: FontWeight.normal),
                ),
                const SizedBox(height: 16),
                const PdfEmbed(
                  pdfUrl: 'https://drive.google.com/file/d/1c3GZjOgyg31q7N9vMQtFKhBQuzHpx7Sl/preview',
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}