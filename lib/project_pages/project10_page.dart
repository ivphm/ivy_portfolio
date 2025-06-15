// taichi logo
import 'package:flutter/material.dart';

class Project10Page extends StatelessWidget {
  const Project10Page({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFF9F9F9),
      appBar: AppBar(
        title: const Text('Shin Zhong Taijiquan 40th Anniversary Logo Design'),
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
                  'Shin Zhong Taijiquan 40th Anniversary Logo Design',
                  style: TextStyle(fontSize: 28, fontWeight: FontWeight.bold),
                ),
                const SizedBox(height: 4),
                const Text(
                  'Commemorative Identity for 新忠太极拳协会',
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
                          Text('''Shin Zhong Taijiquan Association
新忠太极拳协会'''),
                        ],
                      ),
                    ),
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text('Strategies:', style: TextStyle(fontWeight: FontWeight.bold)),
                          SizedBox(height: 4),
                          Text('Visual Identity, Calligraphy Integration, Logo Design'),
                        ],
                      ),
                    ),
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text('Timeline:', style: TextStyle(fontWeight: FontWeight.bold)),
                          SizedBox(height: 4),
                          Text('Apr 2025 – May 2025'),
                        ],
                      ),
                    ),
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text('Tools Used:', style: TextStyle(fontWeight: FontWeight.bold)),
                          SizedBox(height: 4),
                          Text('Canva, Procreate'),
                        ],
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 32),
                const Text(
                  'To celebrate the 40th anniversary of Shin Zhong Taijiquan Association (新忠太极拳协会), this project focused on designing a commemorative logo that pays homage to the association’s cultural heritage and artistic tradition. The design integrates Chinese calligraphy strokes with the symbolic “Yin-Yang” balance of Taiji philosophy. The logo was created for use across banners, uniforms, trophies, and event materials.',
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
  final int imageCount = 5;

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
                padding: const EdgeInsets.symmetric(horizontal: 8),
                child: ClipRRect(
                  borderRadius: BorderRadius.circular(16),
                  child: Image.asset(
                    'assets/images/taichi${index + 1}.png',
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