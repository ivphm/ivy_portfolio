import 'package:flutter/material.dart';

class Project6Page extends StatelessWidget {
  const Project6Page({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFF9F9F9),
      appBar: AppBar(
        title: const Text('Eastern Thunder FC Instagram Posts'),
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
                  'Eastern Thunder FC Instagram Posts',
                  style: TextStyle(fontSize: 28, fontWeight: FontWeight.bold),
                ),
                const SizedBox(height: 4),
                const Text(
                  'Social Media Content and Brand Consistency',
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
                          Text('Client', style: TextStyle(fontWeight: FontWeight.bold)),
                          SizedBox(height: 4),
                          Text('Eastern Thunder Football Club'),
                        ],
                      ),
                    ),
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text('Strategies:', style: TextStyle(fontWeight: FontWeight.bold)),
                          SizedBox(height: 4),
                          Text('Social Media, Visual Design, Brand Cohesion'),
                        ],
                      ),
                    ),
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text('Timeline:', style: TextStyle(fontWeight: FontWeight.bold)),
                          SizedBox(height: 4),
                          Text('Aug 2024 – Nov 2024'),
                        ],
                      ),
                    ),
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text('Tools Used:', style: TextStyle(fontWeight: FontWeight.bold)),
                          SizedBox(height: 4),
                          Text('Canva, Photoshop, Afterlight'),
                        ],
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 32),
                const Text(
                  'This design project centered around developing visually cohesive and engaging Instagram post templates for Eastern Thunder FC. The content included player highlights, match day countdowns, score updates, and recruitment campaigns. The goal was to maintain brand consistency, increase fan engagement, and visually amplify the club\'s identity across digital platforms.',
                  style: TextStyle(fontSize: 16, height: 1.6),
                ),
                const SizedBox(height: 40),
                const HorizontalImageScroller(),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

class HorizontalImageScroller extends StatefulWidget {
  const HorizontalImageScroller({super.key});

  @override
  State<HorizontalImageScroller> createState() => _HorizontalImageScrollerState();
}

class _HorizontalImageScrollerState extends State<HorizontalImageScroller> {
  final PageController _controller = PageController(viewportFraction: 0.85);
  final int imageCount = 14; // Change to number of etfc images

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
                padding: const EdgeInsets.symmetric(horizontal: 20),
                child: ClipRRect(
                  borderRadius: BorderRadius.circular(16),
                  child: AspectRatio(
                    aspectRatio: 4 / 3, // Ensures consistent image height & width
                    child: Image.asset(
                      'assets/images/etfc${index + 1}.jpg',
                      fit: BoxFit.cover,
                    ),
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