import 'package:flutter/material.dart';

class Project14Page extends StatelessWidget {
  const Project14Page({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFF9F9F9),
      appBar: AppBar(
        title: const Text('MidWhereAh'),
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
                  'MidWhereAh: Smart Meetup Coordination for Singapore',
                  style: TextStyle(fontSize: 28, fontWeight: FontWeight.bold),
                ),
                const SizedBox(height: 4),
                const Text(
                  'AI-assisted mobile app to plan fair, accessible, and satisfying meetups',
                  style: TextStyle(fontSize: 18, fontWeight: FontWeight.w300),
                ),
                const SizedBox(height: 32),
                Wrap(
                  spacing: 32,
                  runSpacing: 24,
                  children: const [
                    InfoBox(title: 'Company:', content: '60.005 HCI and AI'),
                    InfoBox(title: 'Strategies:', content: 'Design, UI/UX, Coding, User Research'),
                    InfoBox(title: 'Timeline:', content: 'May 2025 - Present'),
                    InfoBox(title: 'Tools Used:', content: 'Canva, Figma, Visual Studio Code, APIs'),
                  ],
                ),
                const SizedBox(height: 40),
                const SectionText(
                  '''Coordinating meetups across Singapore is stressful and inefficient. People struggle to find locations that are fair and convenient, and group planners often deal with fragmented tools and overwhelming feelings of trying to accommodate everyone.
MidWhereAh is a smart mobile app that makes meetup planning fair and intuitive. It uses Singapore-specific APIs to provide equitable suggestions based on group travel time and preferences.

*Note: This project is still ongoing and in development.'''
                ),
                const SectionHeader('Key Features'),
                const SectionText(
                  '• Group planning with home location and availability input\n'
                  '• Smart venue suggestions using MRT/bus data and filters\n'
                  '• Swipe voting interface for collaborative decisions\n'
                  '• Real-time info on closures and travel conflicts',
                ),
                const SectionHeader('Prototype Screens'),
                const SizedBox(height: 16),
                const MidWhereImageScroller(), 
                const SizedBox(height: 40),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

class MidWhereImageScroller extends StatefulWidget {
  const MidWhereImageScroller({super.key});

  @override
  State<MidWhereImageScroller> createState() => _MidWhereImageScrollerState();
}

class _MidWhereImageScrollerState extends State<MidWhereImageScroller> {
  final PageController _controller = PageController(viewportFraction: 0.65);
  final int _imageCount = 13;
  int _currentIndex = 0;

  void _scrollToPrevious() {
    if (_controller.page! > 0) {
      _controller.previousPage(duration: const Duration(milliseconds: 300), curve: Curves.easeInOut);
    }
  }

  void _scrollToNext() {
    if (_controller.page! < _imageCount - 1) {
      _controller.nextPage(duration: const Duration(milliseconds: 300), curve: Curves.easeInOut);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        SizedBox(
          height: 600,
          width: 450,
          child: PageView.builder(
            controller: _controller,
            itemCount: _imageCount,
            onPageChanged: (index) => setState(() => _currentIndex = index),
            itemBuilder: (context, index) {
              return Padding(
                padding: const EdgeInsets.symmetric(horizontal: 8),
                child: ClipRRect(
                  borderRadius: BorderRadius.circular(16),
                  child: AspectRatio(
                    aspectRatio: 9 / 19.5,
                    child: Image.asset(
                      'assets/images/midwhere${index + 1}.png',
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
          children: List.generate(
            _imageCount,
            (index) => Container(
              margin: const EdgeInsets.symmetric(horizontal: 4),
              width: 8,
              height: 8,
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                color: _currentIndex == index ? Colors.black : Colors.black26,
              ),
            ),
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

class InfoBox extends StatelessWidget {
  final String title;
  final String content;

  const InfoBox({required this.title, required this.content});

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: 200,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(title, style: const TextStyle(fontWeight: FontWeight.bold)),
          const SizedBox(height: 4),
          Text(content),
        ],
      ),
    );
  }
}

class SectionHeader extends StatelessWidget {
  final String title;

  const SectionHeader(this.title);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(top: 32, bottom: 12),
      child: Text(title, style: const TextStyle(fontSize: 20, fontWeight: FontWeight.bold)),
    );
  }
}

class SectionText extends StatelessWidget {
  final String text;

  const SectionText(this.text);

  @override
  Widget build(BuildContext context) {
    return Text(text, style: const TextStyle(fontSize: 16, height: 1.6));
  }
}