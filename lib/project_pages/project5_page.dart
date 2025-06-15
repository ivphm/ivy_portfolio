import 'package:flutter/material.dart';

class Project5Page extends StatelessWidget {
  const Project5Page({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFF9F9F9),
      appBar: AppBar(
        title: const Text('FCSUTD Graphic Designs'),
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
                  'FCSUTD Graphic Designs',
                  style: TextStyle(fontSize: 28, fontWeight: FontWeight.bold),
                ),
                const SizedBox(height: 4),
                const Text(
                  'Branding and Visual Identity for Sports Club',
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
                          Text('SUTD Football Club (FCSUTD)'),
                        ],
                      ),
                    ),
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text('Strategies:', style: TextStyle(fontWeight: FontWeight.bold)),
                          SizedBox(height: 4),
                          Text('Branding, Sports Identity, Apparel Design, Social Media, Photography'),
                        ],
                      ),
                    ),
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text('Timeline:', style: TextStyle(fontWeight: FontWeight.bold)),
                          SizedBox(height: 4),
                          Text('Feb 2024 – Present'),
                        ],
                      ),
                    ),
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text('Tools Used:', style: TextStyle(fontWeight: FontWeight.bold)),
                          SizedBox(height: 4),
                          Text('Canva, Adobe Photoshop, Afterlight'),
                        ],
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 32),
                const Text(
                  'This project focused on establishing a clear and modern visual identity for the SUTD Football Club. The scope involved designing the club logo, digital and physical collateral (including jerseys and posters), and ensuring consistency across all platforms. The design combines bold visual elements with strong type to convey both team unity and energy.',
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
  final int imageCount = 10;

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
                    'assets/images/fcsutd${index + 1}.png',
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