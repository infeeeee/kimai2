<?php

/*
 * This file is part of the Kimai time-tracking app.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Export\Timesheet;

use App\Entity\Timesheet;
use App\Event\TimesheetMetaDisplayEvent;
use App\Export\TimesheetExportInterface;
use App\Repository\Query\TimesheetQuery;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;
use Symfony\Component\HttpFoundation\Response;
use Twig\Environment;

final class HtmlRenderer implements TimesheetExportInterface
{
    /**
     * @var Environment
     */
    private $twig;
    /**
     * @var EventDispatcherInterface
     */
    private $dispatcher;

    public function __construct(Environment $twig, EventDispatcherInterface $dispatcher)
    {
        $this->twig = $twig;
        $this->dispatcher = $dispatcher;
    }

    /**
     * @param Timesheet[] $timesheets
     * @param TimesheetQuery $query
     * @return Response
     * @throws \Twig\Error\LoaderError
     * @throws \Twig\Error\RuntimeError
     * @throws \Twig\Error\SyntaxError
     */
    public function render(array $timesheets, TimesheetQuery $query): Response
    {
        $metaLocation = TimesheetMetaDisplayEvent::TEAM_TIMESHEET_EXPORT;
        if (null !== $query->getUser()) {
            $metaLocation = TimesheetMetaDisplayEvent::EXPORT;
        }

        $event = new TimesheetMetaDisplayEvent($query, $metaLocation);
        $this->dispatcher->dispatch($event);
        $timesheetMetaFields = $event->getFields();

        $content = $this->twig->render('timesheet/export.html.twig', [
            'entries' => $timesheets,
            'query' => $query,
            'metaColumns' => $timesheetMetaFields,
        ]);

        $response = new Response();
        $response->setContent($content);

        return $response;
    }

    /**
     * @return string
     */
    public function getId(): string
    {
        return 'print';
    }
}
