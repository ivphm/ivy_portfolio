import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'dart:html' as html;

/// PROJECTS
class Project {
  final String title;
  final String subtitle;
  final String thumbnailPath;
  final Widget detailPage;
  final List<String> categories; // Graphic, Product, Software, Illustration

  Project({
    required this.title,
    required this.subtitle,
    required this.thumbnailPath,
    required this.detailPage,
    required this.categories,
  });
}

/// HEADER LINE WITH TITLE
class StaggeredHeader extends StatelessWidget {
  final String title;
  final bool lineBefore;

  const StaggeredHeader(this.title, {this.lineBefore = false, Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final beforeFlex = lineBefore ? 1 : 15;
    final afterFlex = lineBefore ? 15 : 1;

    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 16),
      child: Row(
        children: [
          Expanded(flex: beforeFlex, child: const SizedBox()),
          const SizedBox(width: 8),
          Text(title,
              style: const TextStyle(fontSize: 24, fontWeight: FontWeight.bold)),
          const SizedBox(width: 8),
          Expanded(flex: afterFlex, child: const SizedBox()),
        ],
      ),
    );
  }
}

/// IMAGE WITH SHADOW
class GlowImage extends StatelessWidget {
  final String assetPath;
  final double width, height;
  final BoxFit fit;
  final BoxShadow shadow;

  const GlowImage({
    required this.assetPath,
    required this.width,
    required this.height,
    required this.shadow,
    this.fit = BoxFit.cover,
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext c) => DecoratedBox(
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(16),
          boxShadow: [shadow],
        ),
        child: ClipRRect(
          borderRadius: BorderRadius.circular(16),
          child: Image.asset(assetPath, width: width, height: height, fit: fit),
        ),
      );
}

/// EXPERIENCE CARD
class ExperienceSection extends StatelessWidget {
  final String title;
  final String subtitle;
  final List<String> tasks;

  const ExperienceSection({
    required this.title,
    required this.subtitle,
    required this.tasks,
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) => Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(title, style: Theme.of(context).textTheme.titleLarge),
            const SizedBox(height: 4),
            Text(subtitle),
            const SizedBox(height: 8),
            ...tasks.map((t) => Text('• $t')),
          ],
        ),
      );
}

/// PROJECT CARD
class ProjectCard extends StatelessWidget {
  final String imagePath;
  final String title;
  final String description;
  final String techLine;
  final double aspectRatio;
  final bool reverse;

  const ProjectCard({
    required this.imagePath,
    required this.title,
    required this.description,
    required this.techLine,
    required this.aspectRatio,
    required this.reverse,
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(
      builder: (context, constraints) {
        final isMobile = constraints.maxWidth < 800;
        final imageWidget = AspectRatio(
          aspectRatio: aspectRatio,
          child: ClipRRect(
            borderRadius: BorderRadius.circular(16),
            child: Image.asset(imagePath, fit: BoxFit.cover),
          ),
        );
        final textWidget = Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(title, style: Theme.of(context).textTheme.titleLarge),
            const SizedBox(height: 8),
            Text(description),
            const SizedBox(height: 8),
            Text(techLine),
          ],
        );

        if (isMobile) {
          return Column(children: [imageWidget, const SizedBox(height: 8), textWidget]);
        }

        return Row(
          children: reverse
              ? [Expanded(child: textWidget), const SizedBox(width: 8), Expanded(child: imageWidget)]
              : [Expanded(child: imageWidget), const SizedBox(width: 8), Expanded(child: textWidget)],
        );
      },
    );
  }
}

/// SECTION HEADER
class SectionHeader extends StatelessWidget {
  final String title;
  const SectionHeader(this.title, {Key? key}) : super(key: key);

  @override
  Widget build(BuildContext c) => Padding(
        padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 16),
        child: Text(title,
            style: const TextStyle(fontSize: 32, fontWeight: FontWeight.normal, color: Color.fromARGB(255, 20, 74, 145))),
      );
}

/// NAVIGATION BUTTON
class NavButton extends StatefulWidget {
  final String label;
  final VoidCallback onTap;
  const NavButton(this.label, this.onTap, {Key? key}) : super(key: key);

  @override
  State<NavButton> createState() => _NavButtonState();
}

class _NavButtonState extends State<NavButton> {
  bool _isHovering = false;

  @override
  Widget build(BuildContext context) {
    return MouseRegion(
      onEnter: (_) => setState(() => _isHovering = true),
      onExit: (_) => setState(() => _isHovering = false),
      child: GestureDetector(
        onTap: widget.onTap,
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Text(
              widget.label,
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.w400,
                color: Colors.black,
              ),
            ),
            AnimatedContainer(
              duration: const Duration(milliseconds: 200),
              margin: const EdgeInsets.only(top: 4),
              height: 2,
              width: _isHovering ? 24 : 0,
              color: const Color.fromARGB(255, 20, 74, 145),
            ),
          ],
        ),
      ),
    );
  }
}

/// SOCIAL ICON ITEM
class SocialItem extends StatelessWidget {
  final IconData icon;
  final String label;
  final String url;
  final bool isEmail;

  const SocialItem({
    required this.icon,
    required this.label,
    required this.url,
    this.isEmail = false,
    Key? key,
  }) : super(key: key);

  void _launch(BuildContext context) {
    if (isEmail) {
      final mailto = 'mailto:$url';
      html.window.open(mailto, '_blank');
    } else {
      html.window.open(url, '_blank');
    }
  }

  @override
  Widget build(BuildContext context) => InkWell(
        onTap: () => _launch(context),
        borderRadius: BorderRadius.circular(100),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [FaIcon(icon, color: const Color(0xFF144A91)), Text(label, style: const TextStyle(fontSize: 12))],
        ),
      );
}

/// INTERACTIVE PROJECT CARD
class ProjectCardWidget extends StatefulWidget {
  final Project project;
  const ProjectCardWidget({super.key, required this.project});

  @override
  State<ProjectCardWidget> createState() => _ProjectCardState();
}

class _ProjectCardState extends State<ProjectCardWidget> {
  bool _hovering = false;

  @override
  Widget build(BuildContext context) {
    final screenWidth = MediaQuery.of(context).size.width;
    final imageWidth = screenWidth < 600 ? 300.0 : (screenWidth < 1000 ? 400.0 : 600.0);
    final imageHeight = screenWidth < 600 ? 200.0 : (screenWidth < 1000 ? 260.0 : 360.0);
    final titleFontSize = screenWidth < 600 ? 14.0 : (screenWidth < 14.0 ? 16.0 : 18.0);
    final subtitleFontSize = screenWidth < 600 ? 12.0 : (screenWidth < 12.0 ? 14.0 : 16.0);


    return MouseRegion(
      onEnter: (_) => setState(() => _hovering = true),
      onExit: (_) => setState(() => _hovering = false),
      child: GestureDetector(
        onTap: () {
          Navigator.push(
            context,
            MaterialPageRoute(builder: (_) => widget.project.detailPage),
          );
        },
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            AnimatedContainer(
              duration: const Duration(milliseconds: 300),
              transform: _hovering
                  ? Matrix4.translationValues(0, -8, 0)
                  : Matrix4.identity(),
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(12),
                boxShadow: _hovering
                    ? [BoxShadow(blurRadius: 12, color: Colors.black26)]
                    : [],
              ),
              child: ClipRRect(
                borderRadius: BorderRadius.circular(12),
                child: Image.asset(
                  widget.project.thumbnailPath,
                  fit: BoxFit.cover,
                  width: imageWidth,
                  height: imageHeight,
                ),
              ),
            ),
            const SizedBox(height: 12),
            Text(
              widget.project.title,
              textAlign: TextAlign.center,
              style: TextStyle(
                fontSize: titleFontSize,
                fontWeight: FontWeight.w600,
              ),
            ),
            const SizedBox(height: 4),
            Text(
              widget.project.subtitle,
              textAlign: TextAlign.center,
              style: TextStyle(
                fontSize: subtitleFontSize,
                color: Colors.black54,

              )
            )
          ],
        ),
      ),
    );
  }
}

/// PROJECT FILTERS
class ProjectGridSection extends StatefulWidget {
  final List<Project> allProjects;
  const ProjectGridSection({Key? key, required this.allProjects}) : super(key: key);

  @override
  State<ProjectGridSection> createState() => _ProjectGridSectionState();
}

class _ProjectGridSectionState extends State<ProjectGridSection> {
  String selectedCategory = 'All';

  @override
  Widget build(BuildContext context) {
    final filteredProjects = selectedCategory == 'All'
        ? widget.allProjects
        : widget.allProjects.where((p) => p.categories.contains(selectedCategory)).toList();

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        // FILTER TABS
        Padding(
          padding: const EdgeInsets.symmetric(vertical: 24),
          child: Center(
            child: Wrap(
              spacing: 16,
              runSpacing: 12,
              alignment: WrapAlignment.center,
              children: ['All', 'Graphic', 'Product', 'Software', 'Illustration'].map((category) {
                final isSelected = selectedCategory == category;
                return ChoiceChip(
                  label: Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
                    child: Text(
                      category,
                      style: TextStyle(
                        fontSize: 16,
                        fontWeight: FontWeight.w500,
                        color: isSelected ? Colors.white : Colors.black,
                      ),
                    ),
                  ),
                  selected: isSelected,
                  onSelected: (_) => setState(() => selectedCategory = category),
                  selectedColor: const Color(0xFF144A91),
                  backgroundColor: Colors.grey.shade300,
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(20),
                  ),
                );
              }).toList(),
            ),
          ),
        ),

        const SizedBox(height: 24),

        // PROJECT GRID
        LayoutBuilder(
          builder: (context, constraints) {
            final double maxWidth = constraints.maxWidth;
            // Responsive Logic
            final int crossAxisCount = maxWidth < 600
            ? 1
            : (maxWidth < 1000 ? 2 : 2);
            final double spacing = maxWidth > 1000 ? 8 : 12;

            return GridView.count(
              shrinkWrap: true,
              physics: const NeverScrollableScrollPhysics(),
              crossAxisCount: crossAxisCount,
              crossAxisSpacing: 4,
              mainAxisSpacing: 4,
              childAspectRatio: 1.2,
              children: filteredProjects
                  .map((project) => ProjectCardWidget(project: project))
                  .toList(),
            );
          },
        ),
      ],
    );
  }
}

/// IMAGE HEADER WIDGET
class ImageHeader extends StatelessWidget {
  final String imagePath;
  final double width;
  final double height;

  const ImageHeader({
    required this.imagePath,
    this.width = 400,
    this.height = 200,
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Image.asset(
        imagePath,
        width: width,
        height: height,
        fit: BoxFit.contain,
      ),
    );
  }
}