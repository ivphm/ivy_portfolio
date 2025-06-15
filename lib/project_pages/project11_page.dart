import 'package:flutter/material.dart';
import 'dart:html' as html;

class Project11Page extends StatelessWidget {
  const Project11Page({super.key});

  void _launchArticle() {
    html.window.open(
      'https://www.asiaresearchnews.com/content/ballistic-electrons-chart-new-course-next-gen-terahertz-devices',
      '_blank',
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFF9F9F9),
      appBar: AppBar(
        title: const Text('Research Illustration: Ballistic Electrons'),
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
                  'Research Illustration: Ballistic Electrons in Graphene',
                  style: TextStyle(fontSize: 28, fontWeight: FontWeight.bold),
                ),
                const SizedBox(height: 4),
                const Text(
                  'Creative Communication of Ballistic Electrons in Graphene',
                  style: TextStyle(fontSize: 18, fontWeight: FontWeight.w300),
                ),
                const SizedBox(height: 32),
                Wrap(
                  alignment: WrapAlignment.spaceBetween,
                  runSpacing: 24,
                  spacing: 32,
                  children: const [
                    SizedBox(
                      width: 200,
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text('Company:', style: TextStyle(fontWeight: FontWeight.bold)),
                          SizedBox(height: 4),
                          Text('Singapore University of Technology and Design (SUTD)'),
                        ],
                      ),
                    ),
                    SizedBox(
                      width: 200,
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text('Strategies:', style: TextStyle(fontWeight: FontWeight.bold)),
                          SizedBox(height: 4),
                          Text('Research Illustration, Science Communication, Graphic Design'),
                        ],
                      ),
                    ),
                    SizedBox(
                      width: 200,
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text('Timeline:', style: TextStyle(fontWeight: FontWeight.bold)),
                          SizedBox(height: 4),
                          Text('May 2025 - Present'),
                        ],
                      ),
                    ),
                    SizedBox(
                      width: 200,
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text('Tools Used:', style: TextStyle(fontWeight: FontWeight.bold)),
                          SizedBox(height: 4),
                          Text('Procreate'),
                        ],
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 40),
                const Text(
                  'To make cutting-edge physics research accessible to the public, this illustration project visualizes the findings of a 2025 Nature paper on nonlinear optical resonances using ballistic electrons in graphene.',
                  style: TextStyle(fontSize: 16, height: 1.6),
                ),
                const SizedBox(height: 32),
                const Text(
                  'Summary of Research:',
                  style: TextStyle(fontSize: 20),
                ),
                const SizedBox(height: 12),
                const Text(
                  'The study led by researchers from the National University of Singapore (NUS) and Singapore University of Technology and Design (SUTD), explores how ballistic electrons in bilayer graphene (electrons that move through a medium with minimal scattering) generate strong nonlinear optical effects at terahertz frequencies. By leveraging Fabry–Pérot–like electron resonances and custom-fabricated antenna structures, the researchers observed second- and third-harmonic generation, marking a milestone in high-speed, low-power THz device engineering.',
                  style: TextStyle(fontSize: 16, height: 1.6),
                ),
                const SizedBox(height: 32),
                GestureDetector(
                  onTap: _launchArticle,
                  child: ClipRRect(
                    borderRadius: BorderRadius.circular(16),
                    child: Image.asset(
                      'assets/images/project11.png',
                      width: double.infinity,
                      fit: BoxFit.cover,
                    ),
                  ),
                ),
                const SizedBox(height: 12),
                Center(
                  child: TextButton(
                    onPressed: _launchArticle,
                    child: const Text(
                      'Read the article on Asia Research News',
                      style: TextStyle(
                        fontSize: 16,
                        decoration: TextDecoration.underline,
                        color: Color(0xFF144A91),
                      ),
                    ),
                  ),
                ),
                const SizedBox(height: 32),
                const Text(
                  'Visual Process & Explorations:',
                  style: TextStyle(fontSize: 20),
                ),
                const SizedBox(height: 16),
                // First image gallery: research1.jpg to research3.jpg
                const HorizontalImageScroller(
                  imageCount: 3,
                  imagePrefix: 'research',
                  fileExtension: 'jpg',
                  startImageIndex: 1,
                ),
                const SizedBox(height: 24), 
                // Second image gallery: research4.png to research6.png
                const HorizontalImageScroller(
                  imageCount: 3,
                  imagePrefix: 'research',
                  fileExtension: 'png',
                  startImageIndex: 4,
                ),
                const SizedBox(height: 40),
                // New subheading
                const Text(
                  'Future Directions:',
                  style: TextStyle(fontSize: 20),
                ),
                const SizedBox(height: 12),
                const Text(
                  'This project is ongoing and future drawings are in the making...',
                  style: TextStyle(fontSize: 16, height: 1.6),
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

class HorizontalImageScroller extends StatefulWidget {
  final int imageCount;
  final String imagePrefix;
  final String fileExtension;
  final int startImageIndex; // New parameter to define the starting index for image naming

  const HorizontalImageScroller({
    super.key,
    required this.imageCount,
    required this.imagePrefix,
    this.fileExtension = 'png',
    this.startImageIndex = 1, // Default to 1 for backward compatibility
  });

  @override
  State<HorizontalImageScroller> createState() => _HorizontalImageScrollerState();
}

class _HorizontalImageScrollerState extends State<HorizontalImageScroller> {
  final PageController _controller = PageController(viewportFraction: 0.85);

  void _scrollToPrevious() {
    if (_controller.page! > 0) {
      _controller.previousPage(duration: const Duration(milliseconds: 300), curve: Curves.easeInOut);
    }
  }

  void _scrollToNext() {
    if (_controller.page! < widget.imageCount - 1) {
      _controller.nextPage(duration: const Duration(milliseconds: 300), curve: Curves.easeInOut);
    }
  }

  @override
  void dispose() {
    _controller.dispose(); // Dispose of the controller to prevent memory leaks
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        SizedBox(
          height: 500,
          child: PageView.builder(
            controller: _controller,
            itemCount: widget.imageCount,
            itemBuilder: (context, index) {
              // Construct the image path using the startImageIndex
              return Padding(
                padding: const EdgeInsets.symmetric(horizontal: 20),
                child: ClipRRect(
                  borderRadius: BorderRadius.circular(16),
                  child: AspectRatio(
                    aspectRatio: 4 / 3,
                    child: Image.asset(
                      'assets/images/${widget.imagePrefix}${index + widget.startImageIndex}.${widget.fileExtension}',
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
